import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.scss']
})
export class ViewDoctorsComponent implements OnInit {
  doctors:any=[];
  searchTerm:any="";
  dataSource = new MatTableDataSource(this.doctors);
  constructor(private router:Router,private doct_service:DoctorServicesService) {

console.log("DataSource",this.dataSource)
this.getDoctors()
   }

  ngOnInit(): void {
  }
  getDoctors(){
    
    this.doct_service.getAllDoctors().subscribe(
      data => this.handleResponseData(data),
      error => this.handleError(error)
    );
  
  }

  viewProfile(id){
    this.router.navigate(['sidemenu/doctors-profile'],{ queryParams: { doct_view: id} })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.doctors=this.dataSource.filteredData;
  }



  handleResponseData(recieved_data) {
    this.doctors=recieved_data.data;
    this.dataSource = new MatTableDataSource(this.doctors);
  }
  handleError(error) {
    console.log(error)
  }



}
