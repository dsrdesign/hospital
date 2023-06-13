import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private _router: Router,
    private toastr: ToastrService){}


  logout(): void {
    localStorage.clear();
    this._router.navigate(['/auth']);
    this.toastr.info(`Aurevoir !`, 'Vous êtes déconnecté !');
  }

}
