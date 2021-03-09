import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
const GET = 102;
const UPDATE = 201;
@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.scss']
})
export class ViewDoctorsComponent implements OnInit {
  doctors: any = [];
  searchTerm: any = "";
  dataSource = new MatTableDataSource(this.doctors);
  constructor(private router: Router, 
    private snackBar: MatSnackBar,
    private doct_service: DoctorServicesService) {

    console.log("DataSource", this.dataSource)
    this.getDoctors()
  }

  ngOnInit(): void {
  }
  getDoctors() {

    this.doct_service.getAllDoctors().subscribe(
      data => this.handleResponseData(data, GET),
      error => this.handleError(error)
    );

  }

  viewProfile(id) {
    this.router.navigate(['sidemenu/doctors-profile'], { queryParams: { doct_view: id } })
  }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.doctors = this.dataSource.filteredData;
  }

  changeAvailability(i) {
    // this.doctors[i].active= this.doctors[i].active?0:1;
    console.log(this.doctors[i])
    let temp: any = { id: this.doctors[i].id, status: this.doctors[i].active }
    this.doct_service.changeAvailability(temp).subscribe(
      data => this.handleResponseData(data, UPDATE),
      error => this.handleError(error)
    );
  }

  handleResponseData(recieved_data, toggle) {
    if (toggle == GET) {
      this.doctors = recieved_data.data;
      this.dataSource = new MatTableDataSource(this.doctors);
    }
    else{
      this.presentToast(recieved_data.message)
    }

  }
  handleError(error) {
    console.log(error)
  }



}
