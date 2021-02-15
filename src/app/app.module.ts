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
import { EmailChangeComponent } from './pages/email-change/email-change.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeLayoutComponent,
    HomePageComponent,
    AppointmentsPageComponent,
    AdminInfoComponent,
    EmailChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    MatMenuModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
