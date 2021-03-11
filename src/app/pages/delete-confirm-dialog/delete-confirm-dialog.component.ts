import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {
recieved_data:any={message:"Do you really want to delete?"}
  constructor(@Inject(MAT_DIALOG_DATA) public data,private dialogRef: MatDialogRef<DeleteConfirmDialogComponent>) { }

  ngOnInit(): void {
  }
close(type){
  this.dialogRef.close(type);
}
}
