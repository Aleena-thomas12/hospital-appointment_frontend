import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';
import { CancelConfirmDialogComponent } from '../cancel-confirm-dialog/cancel-confirm-dialog.component';
const GET = 12;
const CANCEL = 22;
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
  constructor(private router: Router,private app: AppointmentsService, private route: ActivatedRoute,public dialog: MatDialog) {
    this.route.queryParams.subscribe(params => { this.id = params.patient_view; this.name=params.pat_name})
    this.getPatAppointments()
  }

  ngOnInit(): void {
  }

  cancelAppointment(t,i,j) {
    const dialogRef = this.dialog.open(CancelConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.app.cancelAppointment(t).subscribe(
          data => {
            data.pos1=i;
            data.pos2=j;
            this.handleResponseData(data,CANCEL)
          
          },
          error => this.handleError(error)
        );

      }
     })
  }
  rescheduleAppointment(app){
    this.router.navigate(['sidemenu/reschedule-app'], { queryParams: { app_id: app.id} })
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
    else if(toggle==CANCEL){
      this.appointments[data.pos1][data.pos2].canceled= 1;
      }
  }
  handleError(error) {
    console.log(error)
  }
}
