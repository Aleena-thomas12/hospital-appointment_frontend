import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/PatientsService/patients.service';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
const GET=111;
const DELETE=123;
@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.scss']
})


export class ViewPatientsComponent implements OnInit {
  patients: any = [];
  searchTerm: any = "";
  dataSource: any
  constructor(private pat: PatientsService,
    private router: Router, public dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.getPatients()
  }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.patients = this.dataSource.filteredData;
  }
  getPatients() {
    this.pat.getAllPatients().subscribe(
      data => this.handleResponseData(data, GET),
      error => this.handleError(error)
    );

  }
  editPatient(pat_id){
    this.router.navigate(['sidemenu/edit-patient'], { queryParams: { patient_view: pat_id } })
  }
  patBookings(pat_id,pat_name){
    this.router.navigate(['sidemenu/patient-bookings'], { queryParams: { patient_view: pat_id,pat_name:pat_name } })
  }
  deletePat(patient){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.pat.deletPatInfo(patient.id).subscribe(
          data => {
            data.pos=this.patients.indexOf(patient)
            this.handleResponseData(data, DELETE)},
          error => this.handleError(error)
        );
      } });
  }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  handleResponseData(recieved_data,toggle) {
    if(toggle==GET)
    {  this.patients = recieved_data.data;

      this.dataSource = new MatTableDataSource(this.patients);
    } 
    else if(toggle==DELETE){
      this.patients.splice(recieved_data.pos, 1);
      this.presentToast(recieved_data.message)
    }
  }
  handleError(error) {
    console.log(error)
  }

}
