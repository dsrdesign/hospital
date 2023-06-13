import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Router, TitleStrategy } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit{

  public patients:any = []

  constructor(
    public _patientServices: PatientService,
    public _router: Router
  ){}

  ngOnInit(): void {
      this._patientServices.getPatients().subscribe(res => {
        this.patients = res.data
      })
  }

   archivePatient(idPatien: any){
    const idPatient = parseInt(idPatien)
     this._patientServices.archivePatient(idPatient).subscribe( res => {
        console.log("Mon archive: ", res)

     }
     )
    // .then( res => {
    //   console.log("Mon archive: ", res)
    //   this._router.navigate(["patient/lists"])
    // }



    // )
    this._router.navigate(["../../patient/lists"])



  }

}
