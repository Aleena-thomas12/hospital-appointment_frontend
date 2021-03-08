import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';

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
  departments:any
  constructor(private doct_service:DoctorServicesService) {
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

  getDoctorDetails(){
    this.doct_service.getDoctorData(this.empId).subscribe(
      data => this.handleResponseData(data),
      error => this.handleError(error)
    );
  }

  
  handleResponseData(recieved_data) {
    console.log(recieved_data)
    this.data=recieved_data.data;
    this.departments=recieved_data.departments;
    this.stateChanger()
  }
  handleError(error) {
    console.log(error)
  }

}
