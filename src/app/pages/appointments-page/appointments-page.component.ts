import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';

@Component({
  selector: 'app-appointments-page',
  templateUrl: './appointments-page.component.html',
  styleUrls: ['./appointments-page.component.scss']
})
export class AppointmentsPageComponent implements OnInit {

  departments: any
  appointments: any = []
  constructor(private app: AppointmentsService) {
    this.getAllAppointments()
  }

  ngOnInit(): void {
  }


  getAllAppointments() {
    this.app.getallAppointments().subscribe(
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
    this.departments = data.departments;
    console.log(data, "Recieved Data")
    this.appointments = data.appointments;
  }
  handleError(error) {
    console.log(error)
  }
}
