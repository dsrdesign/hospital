import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../services/consultation.service';
import { Consul } from '../../models/consul.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-consultations',
  templateUrl: './list-consultations.component.html',
  styleUrls: ['./list-consultations.component.css']
})
export class ListConsultationsComponent implements OnInit{

  public consultations:any = []

  constructor(
    public _consultationService: ConsultationService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this._consultationService.getConsultation("En attente").subscribe(res => {
      console.log("ma confrmation :", res.data)
      this.consultations = res.data
    })

  }


  validConsultation(idConsul: number, idPatient: number){
    const consultation: Consul = new Consul
    const idMedecin = localStorage.getItem("@ID")
    consultation.idPatient = idPatient

    if (idMedecin) {
      consultation.idMedecin = parseInt(idMedecin)
    }

    consultation.idConsul = idConsul
    // consultation.idMedecin = parseInt(idMedecin)
    consultation.status = "Confirm"
    this._consultationService.validConsultation(consultation).subscribe( res => {
      this.toastr.success(`Consultation Confirm!`, 'Sucess');
      this._consultationService.getConsultation("En attente").subscribe(res => {
        this.consultations = res.data
      })

    })
  }

}
