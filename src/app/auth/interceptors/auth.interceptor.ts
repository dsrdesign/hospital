import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.services';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    const isLoggedIn = this._authService.isAuth();

    if(isLoggedIn){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authService.currentUser}`
        },
        withCredentials: false
      });
    }
    return next.handle(req)
;  }


}
