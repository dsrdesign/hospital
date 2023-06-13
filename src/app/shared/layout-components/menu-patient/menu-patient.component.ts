import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-menu-patient',
  templateUrl: './menu-patient.component.html',
  styleUrls: ['./menu-patient.component.css']
})
export class MenuPatientComponent {

  constructor(private _router: Router,
    private toastr: ToastrService){}


  logout(): void {
    localStorage.clear();
    this._router.navigate(['/auth']);
    this.toastr.info(`Aurevoir !`, 'Vous êtes déconnecté !');
  }

}
