import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
const GET_DEPT = 112;
const ADD_DOCT = 221;
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  doctorsForm: FormGroup;
  departments: any
  constructor(private formBuilder: FormBuilder,private router: Router, 
     private snackBar: MatSnackBar,private ds: DoctorServicesService) {
    this.getDepartments()
  }

  ngOnInit(): void {
    this.doctorsForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      exp: ['', Validators.required],
      dept: ['', Validators.required],
      active: [1, Validators.required]

    });
  }
  get doctorData() {
    return this.doctorsForm.controls;
  }
  getDepartments() {
    this.ds.getDepartments().subscribe(
      data => this.handleResponseData(data, GET_DEPT),
      error => this.handleError(error)
    );
  }
  addDoctor(val) {
    this.ds.addDoctors(val).subscribe(
      data => this.handleResponseData(data, ADD_DOCT),
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
    else if (toggle == ADD_DOCT) {
     this.presentToast(recieved_data.message)
     this.doctorsForm.reset();
     setTimeout(()=>{ this.router.navigate(['/sidemenu/view-doctors']) }, 2000)
     
     }

  }
  handleError(error) {
    console.log(error)
  }
}
