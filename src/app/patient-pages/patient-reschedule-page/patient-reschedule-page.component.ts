import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';
const GET = 123;
const GET_TIME = 223;
const RES_APP = 323;
@Component({
  selector: 'app-patient-reschedule-page',
  templateUrl: './patient-reschedule-page.component.html',
  styleUrls: ['./patient-reschedule-page.component.scss']
})
export class PatientReschedulePageComponent implements OnInit {
  id: any
  minDate: any
  app_data: any
  dateForm: FormGroup;
  slotsForm: FormGroup;
  slots: any=[]
  selectedSlot:any
  apiState:boolean=false;
  constructor(private formBuilder: FormBuilder, private router: Router,public datepipe: DatePipe,
    private snackBar: MatSnackBar, private route: ActivatedRoute, private app: AppointmentsService) {
    this.route.queryParams.subscribe(params => { this.id =Number(params.app_id) ; })
    this.minDate = new Date()
    this.getSingleAppointment()
  }

  ngOnInit(): void {

    this.dateForm = this.formBuilder.group({ date: ['', Validators.required] });
    this.slotsForm = this.formBuilder.group({
      app_id:[this.id, Validators.required],
      date: ['', Validators.required],
      slot_id: ['', Validators.required] });

  }
  getSingleAppointment() {
    this.app.getAppointment(this.id).subscribe(
      data => {
        this.handleResponseData(data, GET)
      },
      error => this.handleError(error)
    );

  }
  getTimeSlots() {
    let date = this.dateForm.value.date;
    this.app.getTimeSlots(date, this.app_data.doct_id).subscribe(
      data => {
        this.handleResponseData(data, GET_TIME)
      },
      error => this.handleError(error)
    );
  }
  slotSelection(i) {
    console.log("New Slot")
    this.slots.filter(dat => {
      dat.selected = false;
    })
    this.slots[i].selected = true;
    this.selectedSlot=this.slots[i]
    this.slotsForm.controls['date'].patchValue(this.datepipe.transform(this.dateForm.value.date, 'yyyy-MM-dd')) 
    this.slotsForm.controls['slot_id'].patchValue(this.slots[i].id)
  }

  rescheduleAppointment(data){
    this.apiState=true;
    this.app.rescheduleAppointment(data).subscribe(
      data => {
        this.handleResponseData(data, RES_APP)
      },
      error => this.handleError(error)
    );
  }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  handleResponseData(data, toggle) {
    if (toggle == GET) {
      this.app_data = data.appointment;
      this.dateForm.controls['date'].patchValue(this.app_data.date)
    }
    else if(toggle==GET_TIME){
      this.slots = data.slots;
      this.slots.filter(dat => {
        dat.selected = false;

      })
      console.log(this.slots)
    }

    else if(toggle==RES_APP)
    {
      this.apiState=false;
      this.presentToast(data.message);
      this.router.navigate(['/patient-sidemenu/booking-history'])
    }

  }
  handleError(error) {
    console.log(error)
  }
}
