import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PatientLayoutComponent } from './patient-pages/patient-layout/patient-layout.component';
import { AuthGuardService } from 'src/app/services/AuthGuard/auth-guard.service';
import { AuthGuardSidemenuService } from 'src/app/services/AuthGuard/auth-guard-sidemenu.service';
const routes: Routes = [{
  path:'',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path:"login",
  canActivate: [AuthGuardService],
  component:LoginPageComponent
},
{
  path:"sidemenu",
  // canActivate: [AuthGuardSidemenuService],
  component:HomeLayoutComponent,
  loadChildren: () =>
  
    import("./pages/home-layout/home-layout.module").then((m) => m.HomeLayoutModule,),

},
{
  path:"patient-sidemenu",
  component:PatientLayoutComponent,
  loadChildren: () =>
  
    import("./patient-pages/patient-layout/patient-layout.module").then((m) => m.PatientLayoutModule,),

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
