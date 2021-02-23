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
    { id: 2, name: "Appointments",icon:'event_note', url: "/sidemenu/appointment-history" },
    { id: 3, name: "Admin Info",icon:'admin_panel_settings', url: "/sidemenu/admin-info" },
    { id: 4, name: "Doctors",icon:'local_hospital', url: "/sidemenu/view-doctors" },
    { id: 5, name: "Nurses",icon:'local_pharmacy', url: "/sidemenu/view-nurses" },
    { id: 6, name: "Logout",icon:'logout',url: "/sidemenu/logout" },
  ];
  sidenavWidth = 15;
  ngOnInit(): void {
  }
  navigate(i){
    console.log(this.side_pages[i].url)
    this.router.navigate([this.side_pages[i].url])
  }

}
