import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.scss']
})
export class DoctorProfilePageComponent implements OnInit {
data:any={name:"Tyrell McDonald",dept:"Nephrology"}
  constructor() { }

  ngOnInit(): void {
  }

}
