import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { SignPatientComponent } from './components/sign-patient/sign-patient.component';
import { LoginPatientComponent } from './components/login-patient/login-patient.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign', component: SignComponent},
  {path: 'sign-patient', component: SignPatientComponent},
  {path: 'login-patient', component: LoginPatientComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
