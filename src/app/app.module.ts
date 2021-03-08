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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    MatSnackBarModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
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
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    FilterPipeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
