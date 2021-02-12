import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private router:Router) { }
  mobileQuery: MediaQueryList;
  side_pages: Array<any> = [
    { id: 1, name: "Dashboard",icon:'dashboard', url: "/sidemenu/home" },
    { id: 2, name: "Appointments",icon:'event_note', url: "/sidemenu/policy-page" },
    { id: 3, name: "Admin Info",icon:'admin_panel_settings', url: "/sidemenu/account-settings" },
    { id: 4, name: "Doctors",icon:'local_hospital', url: "/sidemenu/policy-page" },
    { id: 5, name: "Nurses",icon:'local_pharmacy', url: "/sidemenu/account-settings" },
    { id: 6, name: "Logout",icon:'home',url: "/sidemenu/account-settings" },
  ];
  sidenavWidth = 15;
  ngOnInit(): void {
  }
  navigate(i){
    this.router.navigate(['/sidemenu/home'])
  }

}
