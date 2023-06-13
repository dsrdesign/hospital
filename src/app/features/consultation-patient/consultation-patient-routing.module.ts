import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConsultationPatientComponent } from './components/list-consultation-patient/list-consultation-patient.component';
import { NewConsultationPatientComponent } from './components/new-consultation-patient/new-consultation-patient.component';

const routes: Routes = [
  {path: '', component: ListConsultationPatientComponent},
  {path: 'create', component: NewConsultationPatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationPatientRoutingModule { }
