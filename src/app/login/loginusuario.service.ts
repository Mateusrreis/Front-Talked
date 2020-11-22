import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Usuario } from './cadastro-login/Usuario';
import { Config } from 'protractor';
import { ThrowStmt } from '@angular/compiler';


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
     return this.http.post('https://localhost:44301/Usuario/CadastrarUsuario',usuario,httpOptions)
  }

  validarUsuarioExiste(usuario: string) {
    return this.http.post('https://localhost:44301/Usuario/BuscarUsuario', JSON.stringify(usuario), httpOptions);
  }

  validarEmailExiste(usuario: string) {
    return this.http.post('https://localhost:44301/Usuario/BuscarEmail', JSON.stringify(usuario), httpOptions);
  }

  loginUsuario(usuario: Usuario) : Observable<HttpResponse<Config>>{
    return  this.http.post('https://localhost:44301/Usuario/LogarUsuario', usuario, {observe: 'response' });
  }

  logoutUsuario() {
    return this.http.post('https://localhost:44301/Usuario/LogoutUsuario', httpOptions);
  }

  validarUsuario(token : string){
    return this.http.post('https://localhost:44301/Usuario/ValidarUsuarioRecuperacao',JSON.stringify(token),httpOptions);
  }

  solicitacaoUsuario(email:string) {
    return this.http.post('https://localhost:44301/Usuario/RecuperarUsuario',JSON.stringify(email),httpOptions);
  }
  
  recuperarSenha(usuario:any){
    return this.http.post('https://localhost:44301/Usuario/AtualizarUsuario',usuario,httpOptions);
  }


}
