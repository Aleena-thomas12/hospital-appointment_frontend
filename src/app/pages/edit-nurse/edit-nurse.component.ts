import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
import { NursesService } from 'src/app/services/Nurses/nurses.service';
const GET_INFO = 112;
const SAVE_INFO = 221;
@Component({
  selector: 'app-edit-nurse',
  templateUrl: './edit-nurse.component.html',
  styleUrls: ['./edit-nurse.component.scss']
})
export class EditNurseComponent implements OnInit {
  nurseForm: FormGroup;
  departments: any
  id:any
  nurseData:any
  constructor(private formBuilder: FormBuilder,private router: Router, private ns: NursesService,
     private snackBar: MatSnackBar,private ds: DoctorServicesService,private route:ActivatedRoute) {
      this.route.queryParams.subscribe(params => { this.id = params.nurse_view; })
      this.getNurseInfo(this.id)
  }

  ngOnInit(): void {
    this.nurseForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      dept: ['', Validators.required],
      active: [1, Validators.required]

    });
  }
  get doctorData() {
    return this.nurseForm.controls;
  }
  getNurseInfo(id) {
    this.ns.getNurseInfo(id).subscribe(
      data => this.handleResponseData(data, GET_INFO),
      error => this.handleError(error)
    );
  }
 saveChanges(temp){
  temp.id=Number(this.id);
  console.log(temp)
  this.ns.editNurseInfo(temp).subscribe(
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
      this.nurseData=recieved_data.data;
      this.nurseForm.controls['name'].patchValue(this.nurseData.name)
      this.nurseForm.controls['mobile'].patchValue(this.nurseData.mobile)
      this.nurseForm.controls['email'].patchValue(this.nurseData.email)
      this.nurseForm.controls['dept'].patchValue(this.nurseData.dept_id)
      this.nurseForm.controls['active'].patchValue(this.nurseData.active)

      console.log(this.departments)
    }
    else if (toggle == SAVE_INFO) {
     this.presentToast(recieved_data.message)
    //  this.nurseForm.reset();
    //  setTimeout(()=>{ this.router.navigate(['/sidemenu/view-nurses']) }, 2000)
     
     }

  }
  handleError(error) {
    console.log(error)
  }
}
