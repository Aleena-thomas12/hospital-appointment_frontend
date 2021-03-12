import { Routes } from "@angular/router";
import { AddDoctorComponent } from "../add-doctor/add-doctor.component";
import { AddNurseComponent } from "../add-nurse/add-nurse.component";
import { AdminInfoComponent } from "../admin-info/admin-info.component";
import { AppointmentsPageComponent } from "../appointments-page/appointments-page.component";
import { DoctorProfilePageComponent } from "../doctor-profile-page/doctor-profile-page.component";
import { EditNurseComponent } from "../edit-nurse/edit-nurse.component";
import { EditPatientsComponent } from "../edit-patients/edit-patients.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { PatientBookingsComponent } from "../patient-bookings/patient-bookings.component";
import { ViewDepartmentsComponent } from "../view-departments/view-departments.component";
import { ViewDoctorsComponent } from "../view-doctors/view-doctors.component";
import { ViewNursesComponent } from "../view-nurses/view-nurses.component";
import { ViewPatientsComponent } from "../view-patients/view-patients.component";


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
    },  {
      path:"view-patients",
      component:ViewPatientsComponent
    },  {
      path:"view-departments",
      component:ViewDepartmentsComponent
    },
    {
      path:"view-nurses",
      component:ViewNursesComponent
    },
    {
      path:"doctors-profile",
      component:DoctorProfilePageComponent
    },
    {
      path:"add-doctor",
      component:AddDoctorComponent
    },
    {
      path:"add-nurse",
      component:AddNurseComponent
    },
    {
      path:"edit-nurse",
      component:EditNurseComponent
    },
    {
      path:"edit-patient",
      component:EditPatientsComponent
    },{
      path:"patient-bookings",
      component:PatientBookingsComponent
    }
    
    
    
    
  ];
  