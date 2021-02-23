import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.scss']
})
export class ViewDoctorsComponent implements OnInit {
  doctors:any=[{id:1,name:"Samuel Paul",dept:"Neuro"},
               {id:2,name:"Antonio River",dept:"Gastro"},
               {id:3,name:"Orotga Trevor",dept:"Gyno"},
               {id:4,name:"Riyo Trace",dept:"Psychology"}];
  searchTerm:any="";
  dataSource = new MatTableDataSource(this.doctors);
  constructor(private router:Router) {

console.log("DataSource",this.dataSource)
   }

  ngOnInit(): void {
  }
  viewProfile(){
    this.router.navigate(['sidemenu/doctors-profile'])
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.doctors=this.dataSource.filteredData;
  }
}
