import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
const GET_DOCT = 1201;
const GET_TIME = 230;
const BOOK_APP = 220;
@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.scss']
})
export class AppointmentBookingComponent implements OnInit {

  minDate: any
  doctors: any = []
  doctorForm: FormGroup;
  slotsForm: FormGroup;
  slots: any = []
  selectedSlot: any
  selectedDoctor: any
  apiState: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, public datepipe: DatePipe,
    private snackBar: MatSnackBar, private app: AppointmentsService, private doct: DoctorServicesService) {
    this.minDate = new Date()

    this.getDoctors()
  }

  ngOnInit(): void {

    this.doctorForm = this.formBuilder.group({
      date: ['', Validators.required],
      doct_id: ['', Validators.required]
    });
    this.slotsForm = this.formBuilder.group({
      date: ['', Validators.required],
      slot_id: ['', Validators.required],
      doct_id: ['', Validators.required]
    });
  }

  getTimeSlots() {
    let date = this.doctorForm.value.date;
    this.app.getTimeSlots(this.datepipe.transform(this.doctorForm.value.date, 'yyyy-MM-dd'), this.doctorForm.value.doct_id).subscribe(
      data => {
        this.handleResponseData(data, GET_TIME)
      },
      error => this.handleError(error)
    );
  }
  getDoctors() {

    this.doct.getAllDoctors().subscribe(
      data => this.handleResponseData(data, GET_DOCT),
      error => this.handleError(error)
    );
  }
  slotSelection(i) {
    console.log("New Slot")
    this.slots.filter(dat => {
      dat.selected = false;
    })
    this.slots[i].selected = true;
    this.doctors.filter(res => {
      if (res.id == this.doctorForm.value.doct_id) {
        this.selectedDoctor = res.name;
      }
    })
    this.selectedSlot = this.slots[i]
    this.slotsForm.controls['date'].patchValue(this.datepipe.transform(this.doctorForm.value.date, 'yyyy-MM-dd'))
    this.slotsForm.controls['slot_id'].patchValue(this.slots[i].id)
    this.slotsForm.controls['doct_id'].patchValue(this.doctorForm.value.doct_id)
  }

  bookAppointment(data) {
this.apiState=true;
    this.app.bookAppointment(data).subscribe(
      data => this.handleResponseData(data, BOOK_APP),
      error => this.handleError(error)
    );

  }

  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
  handleResponseData(data, toggle) {
    if (toggle == GET_DOCT) {
      console.log(data)
      this.doctors = data.data;
    }
    else if (toggle == GET_TIME) {
      this.slots = data.slots;
      this.slots.filter(dat => {
        dat.selected = false;

      })
    }
    else if(toggle==BOOK_APP){
      this.apiState=false;
      this.router.navigate(['/patient-sidemenu/booking-history'])
      this.presentToast(data.message)
    }

  }
  handleError(error) {
    console.log(error)
  }

}
