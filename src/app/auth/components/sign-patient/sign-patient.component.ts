import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/features/patients/models/patient.model';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-patient',
  templateUrl: './sign-patient.component.html',
  styleUrls: ['./sign-patient.component.css']
})
export class SignPatientComponent implements OnInit{

  public patient: Patient = new Patient


  constructor(
    private _authService: AuthService,
    private _router: Router,
    private toastr: ToastrService


  ){}

  ngOnInit(): void {

  }





  createPatient(formValue: {email: string, password: string, name: string, surname: string, codeSalle: string, sex: string, dateEntry: Date}){
    let patient: Patient  = new Patient

    patient.email = formValue.email
    patient.password = formValue.password
    patient.name = formValue.name
    patient.surname = formValue.surname
    patient.dateEntry = formValue.dateEntry
    patient.sex = formValue.sex
    patient.codeSalle = formValue.codeSalle

    console.log("Mon patient: ", patient)

    this._authService.createPatient(patient).subscribe(res => {
      console.log("Mon patient: ", res)
      this.toastr.success(`Le patient a bien ete creee !`, 'Sucess')
      this._router.navigate(['auth/login-patient'])
    })
  }

}
