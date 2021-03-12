import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';
const GET = 12;
@Component({
  selector: 'app-patient-bookings',
  templateUrl: './patient-bookings.component.html',
  styleUrls: ['./patient-bookings.component.scss']
})
export class PatientBookingsComponent implements OnInit {

  id: any
  name:any
  departments: any
  appointments: any = []
  constructor(private app: AppointmentsService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => { this.id = params.patient_view; this.name=params.pat_name})
    this.getPatAppointments()
  }

  ngOnInit(): void {
  }


  getPatAppointments() {
    this.app.getPatientAppointments(this.id).subscribe(
      data => this.handleResponseData(data,GET),
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

  handleResponseData(data, toggle) {
    if (toggle == GET) {
      this.departments = data.departments;
      console.log(data, "Recieved Data")
      this.appointments = data.appointments;
    }

  }
  handleError(error) {
    console.log(error)
  }
}
