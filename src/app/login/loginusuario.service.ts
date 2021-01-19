import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Usuario } from './cadastro-login/Usuario';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';


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
  
  ambiente :string;

  constructor(private http : HttpClient) {
    this.ambiente = environment.hostApi;
   }
  
  enviarUsuario(usuario: Usuario){
     return this.http.post(this.ambiente + '/Login/CriarUsuario',usuario,httpOptions)
  }

  validarUsuarioExiste(usuario: string) {
    return this.http.post(this.ambiente +'/Login/BuscarUsuario', JSON.stringify(usuario), httpOptions);
  }

  validarEmailExiste(usuario: string) {
    return this.http.post(this.ambiente +'/Login/BuscarEmail', JSON.stringify(usuario), httpOptions);
  }

  loginUsuario(usuario: Usuario) : Observable<HttpResponse<Config>>{
    return  this.http.post(this.ambiente +'/Login/LoginUsuario', usuario, {observe: 'response' });
  }

  validarUsuario(token : string){
    return this.http.post(this.ambiente +'/Login/ValidarUsuarioRecuperacao',JSON.stringify(token),httpOptions);
  }

  solicitacaoUsuario(email:string) {
    return this.http.post(this.ambiente +'/Login/RecuperarUsuario',JSON.stringify(email),httpOptions);
  }
  
  recuperarSenha(usuario){
    return this.http.post<boolean>(this.ambiente +'/Login/AtualizarUsuario',usuario,httpOptions);
  }


}
