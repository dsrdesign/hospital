import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly _apiUrl = environment.apiUrl;


  constructor(
              private _http: HttpClient,
              private toastr: ToastrService,
              private _router: Router

  ) { }


  getPatients(): Observable<any>{
    return this._http.get(`${this._apiUrl}/patient/list/?idMedecin=${localStorage.getItem('@ID')}`)
  }
  getSalle(): Observable<any>{
    return this._http.get(`${this._apiUrl}/salle`)
  }


  createPatient(patient: any): Observable<any>{
    console.log("Content Patient: ", patient)
    return this._http.post<any>(`${this._apiUrl}/patient/create`, patient).pipe(
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

  archivePatient(idPatient: number){
    let idMedecin: any

    if (localStorage.getItem("@ID")) {
      idMedecin = localStorage.getItem("@ID")
    }
    console.log("Content consultation: ", idPatient)
    return this._http.put<any>(`${this._apiUrl}/patient/archive/?idPatient=${idPatient}&idMedecin=${parseInt(idMedecin)}`, {})
    // .pipe(
    //   tap({
    //     next: (reponse: any) => {
    //       console.log("consultation: ", reponse);
    //       this._router.navigate(["patient/lits"])
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       this.toastr.error(`Veuillez Réessayer`, 'La consultation n\'a pas pu être modifié !');
    //       console.log("error:", error)
    //     }
    //   })
    // )
  }



}
