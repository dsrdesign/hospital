import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/features/patients/models/patient.model';
import { AuthService } from '../../services/auth.services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit{

  public patient: Patient = new Patient


  constructor(private _router: Router,
              private _authService: AuthService,
              private toastr: ToastrService){}

  ngOnInit(): void {

  }




  onLoginPatient(formValue: {email: string, password: string}) {
    this._authService.loginPatient(formValue.email, formValue.password).subscribe(res => {
      const nom = res.data.name
      console.log('ma response nor: ',res)
      this.toastr.success(`Bienvenue ${nom} !`, 'Connexion Reussie');
      this._router.navigate(['dashboard-patient']);
    });
  }
}
