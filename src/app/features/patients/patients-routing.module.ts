import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { AuthGuard } from 'src/app/core/interceptors/auth.guards';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { DetailPatientComponent } from './components/detail-patient/detail-patient.component';

const routes: Routes = [
  {path: '',
  redirectTo:'lists',
  pathMatch: 'full'

  },
  {path: 'lists', component: ListPatientsComponent, canActivate: [AuthGuard]},
  {path: 'create', component: NewPatientComponent, canActivate: [AuthGuard]},
  {path: 'lists/detail-patient', component: DetailPatientComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
