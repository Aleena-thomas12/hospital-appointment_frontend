import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NursesService } from 'src/app/services/Nurses/nurses.service';
import { PatientsService } from 'src/app/services/PatientsService/patients.service';
const GET_INFO = 112;
const SAVE_INFO = 221;
@Component({
  selector: 'app-edit-patients',
  templateUrl: './edit-patients.component.html',
  styleUrls: ['./edit-patients.component.scss']
})
export class EditPatientsComponent implements OnInit {

  patForm: FormGroup;
  departments: any
  id:any
  patData:any
  constructor(private formBuilder: FormBuilder,private router: Router, private ns: NursesService,
     private snackBar: MatSnackBar,private pat: PatientsService,private route:ActivatedRoute) {
      this.route.queryParams.subscribe(params => { this.id = params.patient_view; })
      this.getPatInfo(this.id)
  }

  ngOnInit(): void {
    this.patForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      address: ['', Validators.required],
      blood: [1, Validators.required],
      age: [1, Validators.required]

    });
  }
  get doctorData() {
    return this.patForm.controls;
  }
  getPatInfo(id) {
    this.pat.getPatInfo(id).subscribe(
      data => this.handleResponseData(data, GET_INFO),
      error => this.handleError(error)
    );
  }
 saveChanges(temp){
  temp.id=Number(this.id);
  console.log(temp)
  this.pat.editPatInfo(temp).subscribe(
    data => this.handleResponseData(data, SAVE_INFO),
    error => this.handleError(error)
  );
 }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
  handleResponseData(recieved_data, toggle) {
    if (toggle == GET_INFO) {
      this.departments = recieved_data.departments
      this.patData=recieved_data.data;
      this.patForm.controls['id'].patchValue(this.patData.id)
      this.patForm.controls['name'].patchValue(this.patData.name)
      this.patForm.controls['phone'].patchValue(this.patData.phone)
      this.patForm.controls['email'].patchValue(this.patData.email)
      this.patForm.controls['address'].patchValue(this.patData.address)
      this.patForm.controls['age'].patchValue(this.patData.age)
      this.patForm.controls['blood'].patchValue(this.patData.blood)

      console.log(this.departments)
    }
    else if (toggle == SAVE_INFO) {
     this.presentToast(recieved_data.message)
     this.patForm.reset();
     setTimeout(()=>{ this.router.navigate(['/sidemenu/view-patients']) }, 1000)
     
     }

  }
  handleError(error) {
    console.log(error)
  }
}
