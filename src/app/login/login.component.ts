import { Component, OnInit } from '@angular/core';
import { Usuario } from './cadastro-login/Usuario';
import { LoginusuarioService } from './loginusuario.service';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { Menu } from '../menu/Menu';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login.component-mobile.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  Menu: Menu[];
  constructor(private toastr: ToastrService, private servico: LoginusuarioService, private rotas: Router) { }

  
  ngOnInit(): void {
    this.Menu = [{
      Nome: 'Cadastrar Usuario',
      Link: 'cadastrologin'
    }]
  }

  Logar(usuario) {

    this.servico.loginUsuario(usuario).subscribe(result => {
      if (result.status === 200) {
        this.rotas.navigate(['/Home/Sermon']);
      } 
    },
      error => this.toastr.error('Verifique se usuario e senha esta correto','Opa aconteceu algum erro!!', {
        progressAnimation: 'increasing'
      }))
  }

  




}
