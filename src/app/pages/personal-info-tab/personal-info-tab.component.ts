import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
const GET = 111;
const UPDATE = 897;
const ADD_SLOT = 123;
const DELETE_SLOT = 321;
const ARR_SLOT = 250;
@Component({
  selector: 'app-personal-info-tab',
  templateUrl: './personal-info-tab.component.html',
  styleUrls: ['./personal-info-tab.component.scss']
})
export class PersonalInfoTabComponent implements OnInit {
  @Input('emp_type') type: number;
  @Input('emp_id') empId: number; // tslint:disable-line: no-input-rename
  @Output() loaded = new EventEmitter<boolean>();
  data: any = null
  status: boolean = false;
  departments: any
  slots: any = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  copy_slots: any = []
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(private doct_service: DoctorServicesService, private snackBar: MatSnackBar) {
    this.status = this.data ? true : false;
  }

  ngOnInit(): void {
    this.getDoctorDetails()
  }
  stateChanger() {
    this.status = true;
    this.loaded.emit(this.status);
    return true
  }

  getDoctorDetails() {
    this.doct_service.getDoctorData(this.empId).subscribe(
      data => this.handleResponseData(data, GET),
      error => this.handleError(error)
    );
  }
  saveChanges() {

    this.status = false;
    this.doct_service.updateDoctorDetails(this.data).subscribe(
      data => this.handleResponseData(data, UPDATE),
      error => this.handleError(error)
    );
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      let temp: any = { val: value, doct_id: this.empId, index: this.slots.length + 1 }
      this.doct_service.addSlot(temp).subscribe(
        data => this.handleResponseData(data, ADD_SLOT),
        error => this.handleError(error)
      );
    }
    if (input) {
      input.value = '';
    }
  }

  remove(temp): void {
    const index = this.slots.indexOf(temp);
    if (index >= 0) {
      this.doct_service.deleteSlot(temp).subscribe(
        data => {
          data.index = index;
          this.handleResponseData(data, DELETE_SLOT)
        },
        error => this.handleError(error)
      );

    }

  }
  drop(event: CdkDragDrop<any[]>) {
    let temp: any = { doct_id: this.empId, prev: event.previousIndex + 1, curr: event.currentIndex + 1 }
    if (temp.prev != temp.curr) {
      this.doct_service.arrangeSlots(temp).subscribe(
        data => {
          data.prev = event.previousIndex;
          data.curr = event.currentIndex;
          this.handleResponseData(data, ARR_SLOT)
        },
        error => this.handleError(error)
      );
    }

  }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  handleResponseData(recieved_data, toggle) {
    if (toggle == GET) {
      this.data = recieved_data.data;
      this.departments = recieved_data.departments;
      this.slots = recieved_data.slots
      console.log(this.slots)
      this.stateChanger()
    }
    else if (toggle == UPDATE) {
      //  console.log(recieved_data)
      location.reload()
      this.presentToast(recieved_data.message)
    }
    else if (toggle == ADD_SLOT) {
      let slot_data = recieved_data.new_data;
      this.slots.push({ slot: slot_data.slot, id: slot_data.id, pos: slot_data.pos });

      this.presentToast(recieved_data.message)
    }
    else if (toggle == DELETE_SLOT) {

      this.slots.splice(recieved_data.index, 1);
      this.presentToast(recieved_data.message)
    }
    else if (toggle == ARR_SLOT) {
      moveItemInArray(this.slots, recieved_data.prev, recieved_data.curr);
      this.presentToast(recieved_data.message)
    }

  }
  handleError(error) {
    console.log(error)
  }

}


