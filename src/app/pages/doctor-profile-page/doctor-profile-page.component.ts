import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorServicesService } from 'src/app/services/Doctors/doctor-services.service';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
const GET = 102;
const UPDATE = 201;
const DELETE=345;
@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.scss']
})
export class DoctorProfilePageComponent implements OnInit {
data:any={name:"Tyrell McDonald",dept:"Nephrology"}
id:number
  constructor(private route: ActivatedRoute,private router: Router,
    private snackBar: MatSnackBar,public dialog: MatDialog,
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
  deleteDoctor(){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.doct_service.deletDoctorInfo(this.data.id).subscribe(
          data => {
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
    {
    this.data=recieved_data.data;
    }
   else if(toggle==UPDATE){
     this.presentToast(recieved_data.message)
   }
   else if(toggle==DELETE){
    this.presentToast(recieved_data.message)
    setTimeout(()=>{                           //<<<---using ()=> syntax
     this.router.navigate(['/sidemenu/view-doctors'])
 }, 1000);
  }
  }
  handleError(error) {
    console.log(error)
  }


}
