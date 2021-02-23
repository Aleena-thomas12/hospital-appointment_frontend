import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  constructor() {
    this.status = this.data ? true : false;
  }

  ngOnInit(): void {

    setTimeout(() => { this.stateChanger() }, 4000)

  }
  stateChanger() {
    this.status = true;
    console.log("Dsdsad")
    this.loaded.emit(this.status);
    return true
  }

}
