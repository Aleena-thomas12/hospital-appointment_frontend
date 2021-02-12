import { Routes } from "@angular/router";
import { HomePageComponent } from "../home-page/home-page.component";


export const HomeLayout: Routes = [
    {
      path: "",
      redirectTo: "home",
      pathMatch: "full",
    },
    {
      path:"home",
      component:HomePageComponent
    }
    
    
  ];
  