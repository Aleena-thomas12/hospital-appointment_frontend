import { Routes } from "@angular/router";
import { AdminInfoComponent } from "../admin-info/admin-info.component";
import { AppointmentsPageComponent } from "../appointments-page/appointments-page.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { ViewDoctorsComponent } from "../view-doctors/view-doctors.component";


export const HomeLayout: Routes = [
    {
      path: "",
      redirectTo: "home",
      pathMatch: "full",
    },
    {
      path:"home",
      component:HomePageComponent
    },
    {
      path:"appointment-history",
      component:AppointmentsPageComponent
    },
    {
      path:"admin-info",
      component:AdminInfoComponent
    },
    {
      path:"view-doctors",
      component:ViewDoctorsComponent
    }
    
    
    
  ];
  