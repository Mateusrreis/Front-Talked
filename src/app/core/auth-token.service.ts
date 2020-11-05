import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public removeTokenUsuario() {
     localStorage.removeItem('token');
  }
}
