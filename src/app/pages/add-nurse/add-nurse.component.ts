import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
import { NursesService } from 'src/app/services/Nurses/nurses.service';
const GET_DEPT = 112;
const ADD_NURS = 221;
@Component({
  selector: 'app-add-nurse',
  templateUrl: './add-nurse.component.html',
  styleUrls: ['./add-nurse.component.scss']
})
export class AddNurseComponent implements OnInit {

 nurseForm: FormGroup;
  departments: any
  constructor(private formBuilder: FormBuilder,private router: Router, private ns: NursesService,
     private snackBar: MatSnackBar,private ds: DoctorServicesService) {
    this.getDepartments()
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
  getDepartments() {
    this.ds.getDepartments().subscribe(
      data => this.handleResponseData(data, GET_DEPT),
      error => this.handleError(error)
    );
  }
  addNurse(val) {
    this.ns.addNurse(val).subscribe(
      data => this.handleResponseData(data, ADD_NURS),
      error => this.handleError(error)
    );
  }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
  handleResponseData(recieved_data, toggle) {
    if (toggle == GET_DEPT) {
      this.departments = recieved_data.data
      console.log(this.departments)
    }
    else if (toggle == ADD_NURS) {
     this.presentToast(recieved_data.message)
     this.nurseForm.reset();
     setTimeout(()=>{ this.router.navigate(['/sidemenu/view-nurses']) }, 2000)
     
     }

  }
  handleError(error) {
    console.log(error)
  }

}
