import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Medecin } from '../../models/medecin.model';
import { AuthService } from '../../services/auth.services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit{

  public medecin: Medecin = new Medecin;
  public services!: any

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    this._authService.getService().subscribe(res => {
      console.log("Mes services sont:", res.data)
      this.services = res.data
    })
  }


  onSign(formValue: {email: string, password: string, name: string, surname: string, codeService: string}){
    const medecin = new Medecin
    medecin.email = formValue.email
    medecin.password = formValue.password
    medecin.name = formValue.name
    medecin.surname = formValue.surname
    medecin.codeService = formValue.codeService
    this._authService.signUp(medecin).subscribe(res => {
      // console.log(res)
      this.toastr.success(`Veuillez vous connecter !`, 'Compte crée avec Sucess');
      this._router.navigate(['auth/login'])
    })
  }





}
