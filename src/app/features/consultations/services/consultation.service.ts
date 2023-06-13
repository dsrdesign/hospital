import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private readonly _apiUrl = environment.apiUrl;


  constructor(
    private _http: HttpClient,
    private toastr: ToastrService
  ) { }


  getConsultation(status: string): Observable<any>{
    return this._http.get(`${this._apiUrl}/consultation/list/?idService=${localStorage.getItem("@IDSERVICE")}&status=${status}`)
  }

  // validConsultation()

  validConsultation(consultation: any): Observable<any>{
    console.log("Content consultation: ", consultation)
    return this._http.put<any>(`${this._apiUrl}/consultation/confirm/?idConsul=${consultation.idConsul}`, consultation).pipe(
      tap({
        next: (reponse: any) => {
          console.log("consultation: ", reponse);
        },
        error: (error: HttpErrorResponse) => {
          this.toastr.error(`Veuillez Réessayer`, 'La consultation n\'a pas pu être modifié !');
          console.log("error:", error)
        }
      })
    )
  }
}
