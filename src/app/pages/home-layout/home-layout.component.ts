import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
const LOGOUT=198;
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private router:Router,    private auth: AuthService) { }
  mobileQuery: MediaQueryList;
  side_pages: Array<any> = [
    { id: 1, name: "Dashboard",icon:'dashboard', url: "/sidemenu/home" },
    { id: 2, name: "Appointments",icon:'event_note', url: "/sidemenu/appointment-history" },
    { id: 3, name: "Admin Info",icon:'admin_panel_settings', url: "/sidemenu/admin-info" },
    { id: 4, name: "Doctors",icon:'local_hospital', url: "/sidemenu/view-doctors" },
    { id: 5, name: "Nurses",icon:'local_pharmacy', url: "/sidemenu/view-nurses" },
    { id: 5, name: "Patients",icon:'account_circle', url: "/sidemenu/view-patients" },
    { id: 5, name: "Departments",icon:'business', url: "/sidemenu/view-departments" },
    { id: 6, name: "Logout",icon:'logout',url: "/sidemenu/logout" },
  ];
  sidenavWidth = 15;
  ngOnInit(): void {
  }
  getName(){
    return localStorage.getItem('name')
  }
  navigate(i){
    if(this.side_pages[i].id==6)
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

// kdmflsdkm
}
