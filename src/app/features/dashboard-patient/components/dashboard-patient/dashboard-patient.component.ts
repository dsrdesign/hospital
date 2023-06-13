import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-patient',
  templateUrl: './dashboard-patient.component.html',
  styleUrls: ['./dashboard-patient.component.css']
})
export class DashboardPatientComponent implements OnInit{

  public nameDoctor!: string | any



  constructor(){}

  ngOnInit(): void {
    this.nameDoctor = localStorage.getItem('@PATIENT')
  }
}
