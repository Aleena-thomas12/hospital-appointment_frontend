import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';
import { PatientsService } from 'src/app/services/PatientsService/patients.service';
const GET=111;
@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.scss']
})
export class PatientHomeComponent implements OnInit {
appointments:any
  constructor(private router: Router,private app: AppointmentsService,private pat: PatientsService, public dialog: MatDialog) { }

  ngOnInit(): void {
  this.getHomeData();
  }
  
getHomeData(){
  this.pat.getHomePageData().subscribe(
    data => this.handleResponseData(data,GET),
    error => this.handleError(error)
  );
}
viewPastBookings(){
this.router.navigate(['/patient-sidemenu/booking-history'])
}
bookAppointment(){
  this.router.navigate(['/patient-sidemenu/book-appointment'])
  
}

handleResponseData(data,toggle) {
  if(toggle==GET){
    this.appointments=data;
    console.log(data)
  }
  
  
}
handleError(error) {
  console.log(error)
}

}
