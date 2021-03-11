import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NursesService } from 'src/app/services/Nurses/nurses.service';
const GET = 112;
const UPDATE = 221;
@Component({
  selector: 'app-view-nurses',
  templateUrl: './view-nurses.component.html',
  styleUrls: ['./view-nurses.component.scss']
})
export class ViewNursesComponent implements OnInit {

  nurses: any = [];
  searchTerm: any = "";
  dataSource: any
  constructor(private ns: NursesService,
    private router: Router, 
    private snackBar: MatSnackBar) {
    this.getNurses()
  }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.nurses = this.dataSource.filteredData;
  }
  getNurses() {
    this.ns.getAllNurses().subscribe(
      data => this.handleResponseData(data, GET),
      error => this.handleError(error)
    );

  }
  changeAvailability(i) {
    console.log(this.nurses[i])
    let temp: any = { id: this.nurses[i].id, status: this.nurses[i].active }
    this.ns.changeAvailability(temp).subscribe(
      data => this.handleResponseData(data, UPDATE),
      error => this.handleError(error)
    );
  }
  addNurses() {

    this.router.navigate(['/sidemenu/add-nurse'])
  }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
  handleResponseData(recieved_data, toggle) {
    if (toggle == GET) {
      this.nurses = recieved_data.data;

      this.dataSource = new MatTableDataSource(this.nurses);
    }
    else if(toggle==UPDATE){
      this.presentToast(recieved_data.message)
    }
  }
  handleError(error) {
    console.log(error)
  }
}
