import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './layout-components/content-layout/content-layout.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { MenuComponent } from './layout-components/menu/menu.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentPatientComponent } from './layout-components/content-patient/content-patient.component';
import { MenuPatientComponent } from './layout-components/menu-patient/menu-patient.component';
import { HeaderPatientComponent } from './layout-components/header-patient/header-patient.component';



@NgModule({
  declarations: [
    ContentLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentPatientComponent,
    MenuPatientComponent,
    HeaderPatientComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    FormsModule
  ]
})
export class SharedModule { }
