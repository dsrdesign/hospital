import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { SignPatientComponent } from './components/sign-patient/sign-patient.component';
import { LoginPatientComponent } from './components/login-patient/login-patient.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignComponent,
    SignPatientComponent,
    LoginPatientComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
