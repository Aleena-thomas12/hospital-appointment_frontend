import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
import { CancelConfirmDialogComponent } from '../cancel-confirm-dialog/cancel-confirm-dialog.component';
const GET = 111;
const CANCEL = 221;
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
  constructor(private router: Router,private app: DoctorServicesService,public dialog: MatDialog,private appntment:AppointmentsService) {

  }

  ngOnInit(): void {
    this.getAllAppointments()
  }

  cancelAppointment(t,i,j) {
    const dialogRef = this.dialog.open(CancelConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.appntment.cancelAppointment(t).subscribe(
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
  getAllAppointments() {
    this.app.getDoctorAppointments(this.empId).subscribe(
      data => this.handleResponseData(data, GET),
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
      this.status=true;
      this.departments = data.departments;
      console.log(data, "Recieved Data")
      this.appointments = data.appointments;
    }
    else if (toggle == CANCEL) {
      this.appointments[data.pos1][data.pos2].canceled = 1;
    }
  }
  handleError(error) {
    console.log(error)
  }
}
