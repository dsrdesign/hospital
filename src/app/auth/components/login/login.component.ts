import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Medecin} from '../../models/medecin.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public medecin: Medecin = new Medecin;


  constructor(private _router: Router,
              private _authService: AuthService,
              private toastr: ToastrService){}

  ngOnInit(): void {}

  onLoginMecin(formValue: {email: string, password: string}) {
    this._authService.login(formValue.email, formValue.password).subscribe(res => {
      const nom = res.data.name
      console.log('ma response nor: ',res)
      this.toastr.success(`Bienvenue ${nom} !`, 'Connexion Reussie');
      this._router.navigate(['dashboard']);
    });
  }

}
