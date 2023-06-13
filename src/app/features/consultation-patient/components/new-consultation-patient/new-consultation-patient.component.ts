import { Component, OnInit } from '@angular/core';
import { Consultation } from '../../models/consultation.model';
import { ConsultationPatientService } from '../../services/consultation-patient.service';
import { Medecin } from 'src/app/auth/models/medecin.model';
import { Time } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-consultation-patient',
  templateUrl: './new-consultation-patient.component.html',
  styleUrls: ['./new-consultation-patient.component.css']
})
export class NewConsultationPatientComponent implements OnInit{

  public consultation: Consultation = new Consultation
  public allMedecins!: Medecin[]
  public medecins!: Medecin[]
  public services:any = []


  constructor(
    public _consultationPatientService: ConsultationPatientService,
    public _router: Router,
    private toastr: ToastrService

  ){}

  ngOnInit(): void {
    this._consultationPatientService.getMedecin().subscribe(res => {
      this.allMedecins = res.data
    })

    this._consultationPatientService.getService().subscribe(res => {
      this.services = res.data
    })

  }


  displayMedecin(service: any){
    this.medecins = this.allMedecins.filter(e => e.codeService == service.target.value)
  }

  createConsultation(formValue: {date: Date, hour: Time, service: string}){
    let consultation: Consultation  = new Consultation
    const idPatient:any = localStorage.getItem("@ID")

    consultation.date = formValue.date
    consultation.hour = formValue.hour
    consultation.status = "En attente"
    consultation.idService = formValue.service
    consultation.idPatient = parseInt(idPatient)

    console.log("Mon patient: ", consultation)

    this._consultationPatientService.createConsultation(consultation).subscribe(res => {
      console.log("Ma consultation: ", res)
      this.toastr.success(`La consultation a bien ete cree !`, 'Sucess')
      this._router.navigate(['consultation-patient'])
    })
  }

}
