import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
const LOGOUT=110;
@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.scss']
})
export class PatientLayoutComponent implements OnInit {
  constructor(private router:Router,    private auth: AuthService) { }
  mobileQuery: MediaQueryList;
  side_pages: Array<any> = [
    { id: 1, name: "Home",icon:'dashboard', url: "/patient-sidemenu/home" },
    { id: 2, name: "Booking History",icon:'event_note', url: "/patient-sidemenu/booking-history" },
    { id: 3, name: "Account Settings",icon:'admin_panel_settings', url: "/patient-sidemenu/account-settings" },
    { id: 4, name: "Log Out",icon:'logout', url: "login" },

  ];
  sidenavWidth = 15;
  ngOnInit(): void {
  }
  getName(){
    return localStorage.getItem('name')
  }
  navigate(i){
    if(this.side_pages[i].id==4)
    {
      this.auth.onLogout().subscribe(
        data => this.handleResponseData(data, LOGOUT),
        error => this.handleError(error)
      );
    }
    else{
    this.router.navigate([this.side_pages[i].url])
    }
  
  }
  handleResponseData(data, type) {
 if(type==LOGOUT)
 {
    console.log(data)
    localStorage.clear();
    this.router.navigate(['login']);
 }
  }
  handleError(err) {
    let re = err.error;
  }


}
