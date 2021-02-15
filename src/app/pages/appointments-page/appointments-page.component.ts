import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments-page',
  templateUrl: './appointments-page.component.html',
  styleUrls: ['./appointments-page.component.scss']
})
export class AppointmentsPageComponent implements OnInit {
  appointments:any=[{date:"2020-02-08",data:[
    {id:1,pat_name:"Trijo S",time:"10.00AM"},
    {id:2,pat_name:"Dfsa S",time:"11.00AM"},
    {id:3,pat_name:"Trdsfijo S",time:"11.10AM"},
    {id:4,pat_name:"Tridsfjo S",time:"11.20AM"},
    {id:5,pat_name:"Trdsfijo S",time:"11.45AM"}

  
  ]},
  {date:"2020-01-28",data:[
    {id:1,pat_name:"Trijo S",time:"10.00AM"},
    {id:2,pat_name:"Dfsa S",time:"11.00AM"},
    {id:3,pat_name:"Trdsfijo S",time:"11.10AM"},
    {id:4,pat_name:"Tridsfjo S",time:"11.20AM"},
    {id:5,pat_name:"Trdsfijo S",time:"11.45AM"}

  
  ]}

]
  constructor() { }

  ngOnInit(): void {
  }

}
