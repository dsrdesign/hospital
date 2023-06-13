import { HttpClient } from '@angular/common/http';
import { createInjectableType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../../patients/services/patient.service';


@Injectable({
  providedIn: "root",
})
export class DashboardService {

  private readonly _apiUrl = environment.apiUrl;


  constructor(
              private _http: HttpClient,
              private toastr: ToastrService
  ) { }

  getAllPatients(): Observable<any>{
    return this._http.get(`${this._apiUrl}/patient/AllList`)
  }
}
