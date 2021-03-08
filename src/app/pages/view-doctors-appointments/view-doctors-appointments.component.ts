import { Component, Input, OnInit } from '@angular/core';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';

@Component({
  selector: 'app-view-doctors-appointments',
  templateUrl: './view-doctors-appointments.component.html',
  styleUrls: ['./view-doctors-appointments.component.scss']
})
export class ViewDoctorsAppointmentsComponent implements OnInit {
 
  @Input('emp_id') empId: number; // tslint:disable-line: no-input-rename
  departments: any
  appointments: any = []
  status: boolean = false;
  constructor(private app: DoctorServicesService) {
   
  }

  ngOnInit(): void {
    this.getAllAppointments()
  }


  getAllAppointments() {
    this.app.getDoctorAppointments(this.empId).subscribe(
      data => this.handleResponseData(data),
      error => this.handleError(error)
    );
  }
  deptname_finder(dept_id) {
    let temp = ""
    this.departments.filter(dpt => {
      if (dpt.id == dept_id) { temp = dpt.name }
    })
    return temp;
  }
 
  handleResponseData(data) {
    this.status=true;
    this.departments = data.departments;
    console.log(data, "Recieved Data")
    this.appointments = data.appointments;
  }
  handleError(error) {
    console.log(error)
  }
}
