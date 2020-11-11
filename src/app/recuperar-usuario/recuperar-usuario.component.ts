import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginusuarioService } from '../login/loginusuario.service';

@Component({
  selector: 'app-recuperar-usuario',
  templateUrl: './recuperar-usuario.component.html',
  styleUrls: ['./recuperar-usuario.component.css']
})
export class RecuperarUsuarioComponent implements OnInit {

  token: string;
  validUser: boolean;
  constructor(private route: ActivatedRoute, private loginService: LoginusuarioService) { }

  ngOnInit() {
    this.VerificarTokenUsuario();
  }

  VerificarTokenUsuario() {
    this.token = this.route.snapshot.queryParamMap.get('token');
    if (this.token != null) {
      this.loginService.validarUsuario(this.token).subscribe(result => {
        if (result) {
          this.validUser = true;
        }
        else {
         this.validUser = false;
        }
      })
    } else {
      this.validUser = false;
    }
  }
}
