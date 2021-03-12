import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-confirm-dialog',
  templateUrl: './cancel-confirm-dialog.component.html',
  styleUrls: ['./cancel-confirm-dialog.component.scss']
})
export class CancelConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private dialogRef: MatDialogRef<CancelConfirmDialogComponent>) { }

  ngOnInit(): void {
  }
close(type){                                                                                              
  this.dialogRef.close(type);
}
}
