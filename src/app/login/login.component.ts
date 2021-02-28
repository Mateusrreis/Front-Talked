import { Component, OnInit } from '@angular/core';
import { Usuario } from '../core/Models/Usuario';
import { LoginusuarioService } from './loginusuario.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Menu } from '../menu/Menu';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login.component-mobile.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  Menu: Menu[];
  readonly BOARDKEY : string ="Enter";
  hide:boolean =true;
  constructor(private toastr: ToastrService, private servico: LoginusuarioService, private rotas: Router) { }
  primary : string = "primary";
  
  ngOnInit(): void {
    this.Menu = [{
      Nome: 'Cadastrar Usuario',
      Link: 'cadastrologin'
    }]
  }

  Logar(usuario) {
    this.servico.loginUsuario(usuario).pipe(first())
    .subscribe(
      (response) => {
        if(response.ok)
        {
          localStorage.setItem('token',response.headers.get('x-autentication'));
          this.rotas.navigate(['/Home/Sermon']);
        }
      },
      error => this.toastr.error('Opa, usuario e senha incorretos')
    ),
    error => this.toastr.error('Opa, verifique seu usuario e senha');
    
  }

  VerifyBoardKey($event){
    let events = <KeyboardEvent> $event;
    if(events.key==this.BOARDKEY)
    {
      this.Logar(this.usuario);
    }
  }
  




}
