import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.scss']
})
export class DoctorProfilePageComponent implements OnInit {
data:any={name:"Tyrell McDonald",dept:"Nephrology"}
id:number
  constructor(private route: ActivatedRoute,private doct_service:DoctorServicesService) { 
    this.route.queryParams.subscribe(params => { this.id = params.doct_view; })
    this.getDoctorDetails()
  }

  ngOnInit(): void {
    
  }
  getDoctorDetails(){
    this.doct_service.getDoctorData(this.id).subscribe(
      data => this.handleResponseData(data),
      error => this.handleError(error)
    );
  }

  
  handleResponseData(recieved_data) {
    console.log(recieved_data)
    this.data=recieved_data.data;
  }
  handleError(error) {
    console.log(error)
  }


}
