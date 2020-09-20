import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './Menu';
import { AuthTokenService } from '../core/auth-token.service';
import { LoginusuarioService } from '../login/loginusuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() Menu: Menu[];
  Authenticated: boolean;
  User: string;
  constructor(private serviceUser: AuthTokenService,
    private loginUsuario: LoginusuarioService,
    private rotas: Router,
    private toaster: ToastrService) { }

  ngOnInit() {
    this.verificarToken();
  }

  verificarToken() {
    let usuario = this.serviceUser.decodePayLoadJWT();
    this.User = usuario.unique_name[1];
    this.Authenticated = true;
  }

  Sair() {
    console.info("Sair");
    this.loginUsuario.logoutUsuario().subscribe(() => {
      this.serviceUser.removeTokenUsuario();
      this.rotas.navigate(['login']);
    },
     err => this.toaster.error('Alguma coisa deu errado'));
  }

  OpenMenu() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  CloseMenu() {
    document.getElementById("mySidenav").style.width = "0";
  }
 
}
