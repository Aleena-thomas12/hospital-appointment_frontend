import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.scss']
})
export class PatientLayoutComponent implements OnInit {
  constructor(private router:Router) { }
  mobileQuery: MediaQueryList;
  side_pages: Array<any> = [
    { id: 1, name: "Home",icon:'dashboard', url: "/patient-sidemenu/home" },
    { id: 2, name: "Booking History",icon:'event_note', url: "/patient-sidemenu/appointment-history" },
    { id: 3, name: "Account Settings",icon:'admin_panel_settings', url: "/patient-sidemenu/admin-info" },
    { id: 3, name: "Log Out",icon:'logout', url: "/patient-sidemenu/admin-info" },

  ];
  sidenavWidth = 15;
  ngOnInit(): void {
  }
  getName(){
    return localStorage.getItem('name')
  }
  navigate(i){
    console.log(this.side_pages[i].url)
    this.router.navigate([this.side_pages[i].url])
  }

}
