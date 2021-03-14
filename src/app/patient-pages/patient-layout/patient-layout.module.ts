import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientLayout } from './patient-layout.routing';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(PatientLayout),
    CommonModule
  ]
})
export class PatientLayoutModule { }
