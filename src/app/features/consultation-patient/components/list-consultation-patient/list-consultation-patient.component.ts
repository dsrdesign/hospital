import { Component, OnInit } from '@angular/core';
import { Consultation } from '../../models/consultation.model';
import { ConsultationPatientService } from '../../services/consultation-patient.service';

@Component({
  selector: 'app-list-consultation-patient',
  templateUrl: './list-consultation-patient.component.html',
  styleUrls: ['./list-consultation-patient.component.css']
})
export class ListConsultationPatientComponent implements OnInit{

  public consultations:any[] = []

  constructor(
    public _consultationPatientService: ConsultationPatientService
  ){}

  ngOnInit(): void {
      this._consultationPatientService.getConsultation().subscribe(res => {
        console.log("Mes con: ", res)
        this.consultations = res.data
        console.log("Mes connnnnnn: ")

        console.log("Mes con: ", this.consultations[1].Medecin.name)

      })
  }

}
