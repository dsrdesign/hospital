import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ListConsultationsComponent } from './components/list-consultations/list-consultations.component';


@NgModule({
  declarations: [
    ListConsultationsComponent
  ],
  imports: [
    CommonModule,
    ConsultationsRoutingModule
  ]
})
export class ConsultationsModule { }
