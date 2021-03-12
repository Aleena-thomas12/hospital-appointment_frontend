import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
import { AddDeptDialogComponent } from '../add-dept-dialog/add-dept-dialog.component';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
const GET = 11;
const DELETE = 22;
const ADD = 23;
@Component({
  selector: 'app-view-departments',
  templateUrl: './view-departments.component.html',
  styleUrls: ['./view-departments.component.scss']
})
export class ViewDepartmentsComponent implements OnInit {
  departments: any
  constructor(private router: Router, public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private doct_service: DoctorServicesService) {
    this.getDept();
  }

  ngOnInit(): void {
  }
  getDept() {

    this.doct_service.getDepartments().subscribe(
      data => this.handleResponseData(data, GET),
      error => this.handleError(error)
    );

  }
  addDept(){
    const dialogRef = this.dialog.open(AddDeptDialogComponent,{hasBackdrop:false});
    dialogRef.afterClosed().subscribe(result => {
      if(result.action){
        this.doct_service.addDept(result.res).subscribe(
          data => {
            this.handleResponseData(data, ADD)},
          error => this.handleError(error)
        );
      }
    
    })
  }
  deleteDept(temp) {

    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doct_service.deleteDepartments(temp.id).subscribe(
          data => {
            data.index = this.departments.indexOf(temp);
            this.handleResponseData(data, DELETE)
          },
          error => this.handleError(error)
        );
      }

    })

  }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
  handleResponseData(recieved_data, toggle) {
    if (toggle == GET) {
      this.departments = recieved_data.data;
    }
    else if (toggle == DELETE) {

      this.departments.splice(recieved_data.index, 1);
      this.presentToast(recieved_data.message)
    }
    else if (toggle == ADD) {
      this.departments.push(recieved_data.data)
      this.presentToast(recieved_data.message)
    }

  }
  handleError(error) {
    let re=error.error
    this.presentToast(re.message)
  }
}
