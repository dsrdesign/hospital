import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Medecin } from '../models/medecin.model';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/features/patients/models/patient.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _apiUrl = environment.apiUrl;
  private _jwtHelper!: JwtHelperService;


  constructor(
    private _http: HttpClient,
    private toastr: ToastrService
  )
  {
    this._jwtHelper! = new JwtHelperService();
  }

  get currentUser(): any {
    return localStorage.getItem('@USER')!;
  }

  get decodedToken(): Medecin|any {
    return this._jwtHelper.decodeToken(this.currentUser)
  }

  isAuth(): boolean {
    const token:any = localStorage.getItem('@USER');
    if(!token){
      return false;
    }else{
      return !this._jwtHelper.isTokenExpired(token)
    }
  }

  private token!: string;

  login(email: string, password: string): Observable<any> {
    // this.token = 'MyFakeToken';

    return this._http.post(`${this._apiUrl}/medecin/login`, {email, password}).pipe(
      shareReplay(1),
      tap({
        next: (response: any) => {
          console.log("response", response);
          localStorage.setItem('@USER', response.token);
          localStorage.setItem('@EMAIL', response.data.email);
          localStorage.setItem('@ID', response.data.id);
          localStorage.setItem('@NAMEDOCTOR', response.data.name + ' ' + response.data.surname);
          localStorage.setItem('@SURNAMEDOCTOR', response.data.surname);
          localStorage.setItem('@IDSERVICE', response.data.codeService);

          console.log(this.decodedToken);
          console.log("Connexion reussie !");
        },
        error: (error: HttpErrorResponse) => {
          console.log("server error: ", error);
          this.toastr.error(`Identifiant ou mot de passe incorrecte`, 'Connexion a echoue !');
          throw new HttpErrorResponse({status: 409, statusText: "Une erreur est survenu lors de la connexion"});
        }
      })
    )
  }

  loginPatient(email: string, password: string): Observable<any> {
    // this.token = 'MyFakeToken';

    return this._http.post(`${this._apiUrl}/patient/login`, {email, password}).pipe(
      shareReplay(1),
      tap({
        next: (response: any) => {
          console.log("response", response);
          localStorage.setItem('@USER', response.token);
          localStorage.setItem('@EMAIL', response.data.email);
          localStorage.setItem('@ID', response.data.id);
          localStorage.setItem('@PATIENT', response.data.name + ' ' + response.data.surname);
          localStorage.setItem('@SURNAMEPATIENT', response.data.surname);
          console.log(this.decodedToken);
          console.log("Connexion reussie !");
        },
        error: (error: HttpErrorResponse) => {
          console.log("server error: ", error);
          this.toastr.error(`Identifiant ou mot de passe incorrecte`, 'Connexion a echoue !');
          throw new HttpErrorResponse({status: 409, statusText: "Une erreur est survenu lors de la connexion"});
        }
      })
    )
  }

  signUp(medecin: Medecin): Observable<Medecin>{
    console.log("My mede: ", medecin)
    return this._http.post<Medecin>(`${this._apiUrl}/medecin/sign`, medecin).pipe(
      shareReplay(1),
      tap({
        next: (reponse: any) => {
          console.log("Reponse: ", reponse);
        },
        error: (error: HttpErrorResponse) => {
          this.toastr.error(`Veuillez Réessayer`, 'Le compte n\'a pas pu être crée !');
          console.log("error:", error)
        }
      })
    )
  }

  getService(): Observable<any>{
    return this._http.get(`${this._apiUrl}/service`)
  }

  createPatient(patient: Patient): Observable<Patient>{
    console.log("Content Patient: ", patient)
    return this._http.post<Patient>(`${this._apiUrl}/patient/create`, patient).pipe(
      tap({
        next: (reponse: any) => {
          console.log("Patient: ", reponse);
        },
        error: (error: HttpErrorResponse) => {
          this.toastr.error(`Veuillez Réessayer`, 'Le patient n\'a pas pu être crée !');
          console.log("error:", error)
        }
      })
    )
  }

  getToken(): string {
    return this.token;
  }
}
