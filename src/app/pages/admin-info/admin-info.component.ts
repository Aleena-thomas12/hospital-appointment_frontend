import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { EmailChangeComponent } from '../email-change/email-change.component';
import { PasswordChangeBottomComponent } from '../password-change-bottom/password-change-bottom.component';
// import * as $ from "jquery";

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }
  emailChange() {
    this._bottomSheet.open(EmailChangeComponent);
  }
  passwordChange() {
    this._bottomSheet.open(PasswordChangeBottomComponent);
  }
}
