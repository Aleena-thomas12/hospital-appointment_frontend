import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dept-dialog',
  templateUrl: './add-dept-dialog.component.html',
  styleUrls: ['./add-dept-dialog.component.scss']
})
export class AddDeptDialogComponent implements OnInit {
  deptForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private dialogRef: MatDialogRef<AddDeptDialogComponent>) { }

  ngOnInit(): void {
    this.deptForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  get deptData() {
    return this.deptForm.controls;
  }
  onAction(action,data?) {
    let temp:any={action:action,res:data.name?data.name:null}
    this.dialogRef.close(temp);
  }
}
