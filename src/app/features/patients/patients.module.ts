import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailPatientComponent } from './components/detail-patient/detail-patient.component';


@NgModule({
  declarations: [
    ListPatientsComponent,
    NewPatientComponent,
    DetailPatientComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PatientsModule { }
