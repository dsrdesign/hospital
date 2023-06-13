import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPatientRoutingModule } from './dashboard-patient-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardPatientComponent } from './components/dashboard-patient/dashboard-patient.component';

import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    DashboardPatientComponent
  ],
  imports: [
    CommonModule,
    DashboardPatientRoutingModule,
    SharedModule,
    NgApexchartsModule
  ]
})
export class DashboardPatientModule { }
