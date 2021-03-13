import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';
import { CancelConfirmDialogComponent } from '../cancel-confirm-dialog/cancel-confirm-dialog.component';
const GET=111;
const CANCEL=221;
@Component({
  selector: 'app-appointments-page',
  templateUrl: './appointments-page.component.html',
  styleUrls: ['./appointments-page.component.scss']
})
export class AppointmentsPageComponent implements OnInit {

  departments: any
  appointments: any = []
  constructor(private router: Router,private app: AppointmentsService, public dialog: MatDialog) {
    this.getAllAppointments()
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
    this.router.navigate(['sidemenu/reschedule-app'], { queryParams: { app_id: app.id,app_date:app.date,app_time:app.time} })
  }
  getAllAppointments() {
    this.app.getallAppointments().subscribe(
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

  handleResponseData(data,toggle) {
    if(toggle==GET){
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
