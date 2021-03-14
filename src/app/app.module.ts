import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import { AppointmentsPageComponent } from './pages/appointments-page/appointments-page.component';
import { AdminInfoComponent } from './pages/admin-info/admin-info.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatTableModule} from '@angular/material/table';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { EmailChangeComponent } from './pages/email-change/email-change.component';
import { ViewDoctorsComponent } from './pages/view-doctors/view-doctors.component';
import { ViewNursesComponent } from './pages/view-nurses/view-nurses.component';
import { DoctorProfilePageComponent } from './pages/doctor-profile-page/doctor-profile-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PersonalInfoTabComponent } from './pages/personal-info-tab/personal-info-tab.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { MessaageToastersComponent } from './Toasters/messaage-toasters/messaage-toasters.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewDoctorsAppointmentsComponent } from './pages/view-doctors-appointments/view-doctors-appointments.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddDoctorComponent } from './pages/add-doctor/add-doctor.component';
import { DeleteConfirmDialogComponent } from './pages/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddNurseComponent } from './pages/add-nurse/add-nurse.component';
import { EditNurseComponent } from './pages/edit-nurse/edit-nurse.component';
import { ViewDepartmentsComponent } from './pages/view-departments/view-departments.component';
import { ViewPatientsComponent } from './pages/view-patients/view-patients.component';
import { EditPatientsComponent } from './pages/edit-patients/edit-patients.component';
import { PatientBookingsComponent } from './pages/patient-bookings/patient-bookings.component';
import { AddDeptDialogComponent } from './pages/add-dept-dialog/add-dept-dialog.component';
import { PasswordChangeBottomComponent } from './pages/password-change-bottom/password-change-bottom.component';
import { CancelConfirmDialogComponent } from './pages/cancel-confirm-dialog/cancel-confirm-dialog.component';
import { ReschedulePageComponent } from './pages/reschedule-page/reschedule-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { PatientLayoutComponent } from './patient-pages/patient-layout/patient-layout.component';
import { PatientHomeComponent } from './patient-pages/patient-home/patient-home.component';
import { JwtModule } from "@auth0/angular-jwt";
import { ForgotPassBottomSheetComponent } from './patient-pages/forgot-pass-bottom-sheet/forgot-pass-bottom-sheet.component';
import { PasswordResetLinkComponent } from './patient-pages/password-reset-link/password-reset-link.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeLayoutComponent,
    HomePageComponent,
    AppointmentsPageComponent,
    AdminInfoComponent,
    EmailChangeComponent,
    ViewDoctorsComponent,
    ViewNursesComponent,
    DoctorProfilePageComponent,
    PersonalInfoTabComponent,
    MessaageToastersComponent,
    ViewDoctorsAppointmentsComponent,
    AddDoctorComponent,
    DeleteConfirmDialogComponent,
    AddNurseComponent,
    EditNurseComponent,
    ViewDepartmentsComponent,
    ViewPatientsComponent,
    EditPatientsComponent,
    PatientBookingsComponent,
    AddDeptDialogComponent,
    PasswordChangeBottomComponent,
    CancelConfirmDialogComponent,
    ReschedulePageComponent,
    PatientLayoutComponent,
    PatientHomeComponent,
    ForgotPassBottomSheetComponent,
    PasswordResetLinkComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    MatSnackBarModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    DragDropModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    FilterPipeModule,
    JwtModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
