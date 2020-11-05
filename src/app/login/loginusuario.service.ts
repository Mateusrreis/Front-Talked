import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap, catchError, map, first } from 'rxjs/operators';
import { Usuario } from './cadastro-login/Usuario';
import { Config } from 'protractor';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginusuarioService {
  

  constructor(private http : HttpClient) { }
  
  enviarUsuario(usuario: Usuario){
     return this.http.post('/Usuario/CadastrarUsuario',usuario)
  }

  validarUsuarioExiste(usuario: string) {
    return this.http.post('/Usuario/BuscarUsuario', JSON.stringify(usuario), httpOptions);
  }

  validarEmailExiste(usuario: string) {
    return this.http.post('/Usuario/BuscarEmail', JSON.stringify(usuario), httpOptions);
  }

  loginUsuario(usuario: Usuario) : Observable<HttpResponse<Config>>{
    return  this.http.post('https://localhost:44301/Usuario/LogarUsuario', usuario, {observe: 'response' });
  }

  logoutUsuario() {
    return this.http.post('https://localhost:44301/Usuario/LogoutUsuario', httpOptions);
  }
}
