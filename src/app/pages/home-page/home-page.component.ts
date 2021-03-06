import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/HomePage/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private home_page: HomePageService) { 

    this.getHomeData();
  }

  ngOnInit(): void {
  }
  getHomeData() {
    this.home_page.getHomeData().subscribe(
      data => this.handleResponseData(data),
      error => this.handleError(error)
    );
  }

  handleResponseData(data) {
    console.log(data)
  }
  handleError(error) {
    console.log(error)
  }
}
