import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
const GET = 102;
const UPDATE = 201;
@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.scss']
})
export class DoctorProfilePageComponent implements OnInit {
data:any={name:"Tyrell McDonald",dept:"Nephrology"}
id:number
  constructor(private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private doct_service:DoctorServicesService) { 
    this.route.queryParams.subscribe(params => { this.id = params.doct_view; })
    this.getDoctorDetails()
  }

  ngOnInit(): void {
    
  }
  changeAvailability(){
    let temp:any={id:this.id,status:this.data.active}
    this.doct_service.changeAvailability(temp).subscribe(
      data => this.handleResponseData(data,UPDATE),
      error => this.handleError(error)
    );
  }
  getDoctorDetails(){
    this.doct_service.getDoctorData(this.id).subscribe(
      data => this.handleResponseData(data,GET),
      error => this.handleError(error)
    );
  }

  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }

  handleResponseData(recieved_data,toggle) {
    if(toggle==GET)
    {
    this.data=recieved_data.data;
    }
   else{
     this.presentToast(recieved_data.message)
   }
  }
  handleError(error) {
    console.log(error)
  }


}
