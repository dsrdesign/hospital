import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/interceptors/auth.guards';
import { ListConsultationsComponent } from './components/list-consultations/list-consultations.component';

const routes: Routes = [
  {path: '', component: ListConsultationsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationsRoutingModule { }
