import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-nurses',
  templateUrl: './view-nurses.component.html',
  styleUrls: ['./view-nurses.component.scss']
})
export class ViewNursesComponent implements OnInit {

  nurses:any=[{id:1,name:"Samuel Paul",dept:"Neuro"},
               {id:2,name:"Antonio River",dept:"Gastro"},
               {id:3,name:"Orotga Trevor",dept:"Gyno"},
               {id:4,name:"Riyo Trace",dept:"Psychology"}];
  searchTerm:any="";
  dataSource = new MatTableDataSource(this.nurses);
  constructor() {

console.log("DataSource",this.dataSource)
   }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.nurses=this.dataSource.filteredData;
  }

}
