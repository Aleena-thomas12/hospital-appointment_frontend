import { Routes } from "@angular/router";
import { AppointmentBookingComponent } from "../appointment-booking/appointment-booking.component";
import { BookingHistoryComponent } from "../booking-history/booking-history.component";
import { PatientHomeComponent } from "../patient-home/patient-home.component";
import { PatientReschedulePageComponent } from "../patient-reschedule-page/patient-reschedule-page.component";



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
    {
      path:"booking-history",
      component:BookingHistoryComponent
    },
    {
      path:"patient-reschedule-page",
      component:PatientReschedulePageComponent
    },
    {
      path:"book-appointment",
      component:AppointmentBookingComponent
    }
    
  ];
  