import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationPatientRoutingModule } from './consultation-patient-routing.module';
import { ListConsultationPatientComponent } from './components/list-consultation-patient/list-consultation-patient.component';
import { NewConsultationPatientComponent } from './components/new-consultation-patient/new-consultation-patient.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListConsultationPatientComponent,
    NewConsultationPatientComponent
  ],
  imports: [
    CommonModule,
    ConsultationPatientRoutingModule,
    SharedModule
  ]
})
export class ConsultationPatientModule { }
