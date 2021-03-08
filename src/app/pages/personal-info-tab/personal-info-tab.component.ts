import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
const GET = 111;
const UPDATE = 897;
@Component({
  selector: 'app-personal-info-tab',
  templateUrl: './personal-info-tab.component.html',
  styleUrls: ['./personal-info-tab.component.scss']
})
export class PersonalInfoTabComponent implements OnInit {
  @Input('emp_type') type: number;
  @Input('emp_id') empId: number; // tslint:disable-line: no-input-rename
  @Output() loaded = new EventEmitter<boolean>();
  data: any = null
  status: boolean = false;
  departments: any
  constructor(private doct_service: DoctorServicesService,private snackBar: MatSnackBar) {
    this.status = this.data ? true : false;
  }

  ngOnInit(): void {

    // setTimeout(() => {  }, 1000)
    this.getDoctorDetails()
  }
  stateChanger() {
    this.status = true;
    this.loaded.emit(this.status);
    return true
  }

  getDoctorDetails() {
    this.doct_service.getDoctorData(this.empId).subscribe(
      data => this.handleResponseData(data, GET),
      error => this.handleError(error)
    );
  }
  saveChanges() {
    
    this.status=false;
    this.doct_service.updateDoctorDetails(this.data).subscribe(
      data => this.handleResponseData(data,UPDATE),
      error => this.handleError(error)
    );
  }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  handleResponseData(recieved_data, toggle) {
    if (toggle == GET) {
      this.data = recieved_data.data;
      this.departments = recieved_data.departments;
      this.stateChanger()
    }
    else if(toggle==UPDATE) {
      //  console.log(recieved_data)
      location.reload()
       this.presentToast(recieved_data.message)
    }

  }
  handleError(error) {
    console.log(error)
  }

}
