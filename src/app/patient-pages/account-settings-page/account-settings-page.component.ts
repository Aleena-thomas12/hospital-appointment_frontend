import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NursesService } from 'src/app/services/Nurses/nurses.service';
import { PatientsService } from 'src/app/services/PatientsService/patients.service';
const GET_INFO=112;
const SAVE_INFO=223;
@Component({
  selector: 'app-account-settings-page',
  templateUrl: './account-settings-page.component.html',
  styleUrls: ['./account-settings-page.component.scss']
})
export class AccountSettingsPageComponent implements OnInit {
  patForm: FormGroup;
  departments: any
  id:any
  patData:any
  constructor(private formBuilder: FormBuilder,private router: Router, private ns: NursesService,
     private snackBar: MatSnackBar,private pat: PatientsService,private route:ActivatedRoute) {
      this.getPatInfo()
  }

  ngOnInit(): void {
    this.patForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      blood: [null, Validators.required],
      age: [null, Validators.required]

    });
  }
  get doctorData() {
    return this.patForm.controls;
  }
  getPatInfo() {
    this.pat.getAccountInfo().subscribe(
      data => this.handleResponseData(data, GET_INFO),
      error => this.handleError(error)
    );
  }
 saveChanges(temp){
  temp.id=Number(this.id);
  console.log(temp)
  this.pat.editAccountInfo(temp).subscribe(
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
      this.patData=recieved_data.pat_info;
      this.patForm.controls['id'].patchValue(this.patData.id)
      this.patForm.controls['name'].patchValue(this.patData.name)
      this.patForm.controls['phone'].patchValue(this.patData.phone)
      this.patForm.controls['address'].patchValue(this.patData.address)
      this.patForm.controls['age'].patchValue(this.patData.age)
      this.patForm.controls['blood'].patchValue(this.patData.blood)

      console.log(this.patForm)
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
