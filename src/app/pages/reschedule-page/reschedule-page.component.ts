import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';
const GET=123;
const GET_TIME=223;
@Component({
  selector: 'app-reschedule-page',
  templateUrl: './reschedule-page.component.html',
  styleUrls: ['./reschedule-page.component.scss']
})
export class ReschedulePageComponent implements OnInit {
id:any
minDate:any
app_data:any
dateForm: FormGroup;
slotsForm: FormGroup;
slots:any
  constructor(private formBuilder: FormBuilder,private router: Router, 
    private snackBar: MatSnackBar,private route:ActivatedRoute,private app: AppointmentsService) {
     this.route.queryParams.subscribe(params => { this.id = params.app_id; })
     this.minDate =new Date()
    this.getSingleAppointment()
    }

  ngOnInit(): void {

    this.dateForm = this.formBuilder.group({date: ['', Validators.required] });
    this.slotsForm = this.formBuilder.group({slot_id: ['', Validators.required] });

  }
getSingleAppointment(){
  this.app.getAppointment(this.id).subscribe(
    data => {
      this.handleResponseData(data,GET)   
    },
    error => this.handleError(error)
  );

}
getTimeSlots(){
  let date=this.dateForm.value.date;
  this.app.getTimeSlots(date,this.app_data.doct_id).subscribe(
    data => {
      this.handleResponseData(data,GET_TIME)   
    },
    error => this.handleError(error)
  );
}
handleResponseData(data,toggle) {
  if(toggle==GET){
    this.app_data=data.appointment;
    this.dateForm.controls['date'].patchValue(this.app_data.date)
  }
  else{
    this.slots=data.slots;
  }
  
}
handleError(error) {
  console.log(error)
}
}
