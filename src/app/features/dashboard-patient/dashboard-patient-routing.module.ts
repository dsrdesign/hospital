import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPatientComponent } from './components/dashboard-patient/dashboard-patient.component';
import { AuthGuard } from 'src/app/core/interceptors/auth.guards';

const routes: Routes = [
  {path: '', component: DashboardPatientComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPatientRoutingModule { }
