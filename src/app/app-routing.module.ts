import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layout-components/content-layout/content-layout.component';
import { ContentPatientComponent } from './shared/layout-components/content-patient/content-patient.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'dashboard', component:ContentLayoutComponent, loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'patient', component:ContentLayoutComponent, loadChildren: () => import('./features/patients/patients.module').then(m => m.PatientsModule)},
  {path: 'consultation', component:ContentLayoutComponent, loadChildren: () => import('./features/consultations/consultations.module').then(m => m.ConsultationsModule)},
  {path: 'dashboard-patient', component:ContentPatientComponent, loadChildren: () => import('./features/dashboard-patient/dashboard-patient.module').then(m => m.DashboardPatientModule)},
  {path: 'consultation-patient', component:ContentPatientComponent, loadChildren: () => import('./features/consultation-patient/consultation-patient.module').then(m => m.ConsultationPatientModule)},

  {path: '**', redirectTo: 'auth'},
  {path: '**', redirectTo: 'dashboard'},
  {path: '', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
