import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path:"login",
  component:LoginPageComponent
},
{
  path:"home",
  component:HomeLayoutComponent,
  loadChildren: () =>
  
    import("./pages/home-layout/home-layout.module").then((m) => m.HomeLayoutModule,),

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
