import { Routes } from "@angular/router";
import { PatientHomeComponent } from "../patient-home/patient-home.component";



export const PatientLayout: Routes = [
    {
      path: "",
      redirectTo: "home",
      pathMatch: "full",
    },
    {
      path:"home",
      component:PatientHomeComponent
    },
   
    
  ];
  