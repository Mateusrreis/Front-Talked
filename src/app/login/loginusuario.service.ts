import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Usuario } from './cadastro-login/Usuario';
import { tap, catchError } from 'rxjs/operators';
import { Observable} from 'rxjs';


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

  loginUsuario(usuario: Usuario): Observable<HttpResponse<any>> {
    const response = this.http.post('/Usuario/LogarUsuario', usuario, {observe: 'response' })
    return response.pipe(tap(resp => {
      localStorage.setItem('token',resp.headers.get('X-Autentication'));
    }));
  }

  logoutUsuario() {
    return this.http.post('/Usuario/LogoutUsuario', httpOptions);
  }
}
