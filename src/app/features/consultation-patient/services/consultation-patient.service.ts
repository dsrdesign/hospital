import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environment/environment';
import { Consultation } from '../models/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationPatientService {

  private readonly _apiUrl = environment.apiUrl;


  constructor(
    private _http: HttpClient,
    private toastr: ToastrService  ) { }


    getService(): Observable<any>{
      return this._http.get(`${this._apiUrl}/service`)
    }

    getMedecin(): Observable<any>{
      return this._http.get(`${this._apiUrl}/medecin`)
    }

    createConsultation(consultation: Consultation): Observable<Consultation>{
      console.log("Content consultation: ", consultation)
      return this._http.post<Consultation>(`${this._apiUrl}/consultation/create`, consultation).pipe(
        tap({
          next: (reponse: any) => {
            console.log("Consultation: ", reponse);
          },
          error: (error: HttpErrorResponse) => {
            this.toastr.error(`Veuillez Réessayer`, 'La consultation n\'a pas pu être crée !');
            console.log("error:", error)
          }
        })
      )
    }

    getConsultation(): Observable<any>{
      return this._http.get(`${this._apiUrl}/consultation-patient/list/?idPatient=${localStorage.getItem("@ID")}`)
    }

}
