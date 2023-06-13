import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/features/patients/models/patient.model';
import { Nurse } from 'src/app/features/patients/models/nurse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PatientService } from 'src/app/features/patients/services/patient.service';
import { ToastrService } from 'ngx-toastr';

import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit{

  private readonly _apiUrl = environment.apiUrl;


  public patient: Patient = new Patient
  public nurse: Nurse = new Nurse
  public nurses: any;
  public salles: any = []


    constructor(
                private _router: Router,
                private toastr: ToastrService,
                private _patientService: PatientService

    ){}

    ngOnInit(): void {
      this._patientService.getSalle().subscribe(res => {
        console.log("Mes salles sont:", res.data)
        this.salles = res.data
      })

    }

    registerPatient(patient: Patient){
      console.log("Mon Patient: ", patient)
    }

    displayNurse(){
      this.nurses = document.getElementById('nurse');
      console.log(this.nurses)
      this.nurses.style.display = "block";
    }

    noneNurse(){
      this.nurses = document.getElementById('nurse');
      console.log(this.nurses)
      this.nurses.style.display = "none";

    }


    createPatient(formValue: {name: string, surname: string, codeSalle: string, sex: string, dateEntry: Date, nameNurse: string, surnameNurse: string, sexNurse: string, cniNurse: number}){
      let patient: any  = new Object

      patient.name = formValue.name
      patient.surname = formValue.surname
      patient.dateEntry = formValue.dateEntry
      patient.sex = formValue.sex
      patient.codeSalle = formValue.codeSalle
      patient.nameNurse = formValue.nameNurse
      patient.surnameNurse = formValue.surnameNurse
      patient.sexNurse = formValue.sexNurse
      patient.cniNurse = formValue.cniNurse
      patient.idMedecin = localStorage.getItem('@ID')





      console.log("Mon patient: ", patient)


      this._patientService.createPatient(patient).subscribe(res => {
        console.log("Mon patient: ", res)
        this.toastr.success(`Le patient a bien ete enregistre !`, 'Sucess')
        this._router.navigate(['patient'])
      })
    }

}
