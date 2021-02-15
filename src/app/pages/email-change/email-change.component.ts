import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.scss']
})
export class EmailChangeComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<EmailChangeComponent>) { }

  ngOnInit(): void {
  }

}
