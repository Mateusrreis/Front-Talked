import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginusuarioService } from '../login/loginusuario.service';
import { Validacoes } from '../Validacoes/Validacoes';

@Component({
  selector: 'app-recuperar-usuario',
  templateUrl: './recuperar-usuario.component.html',
  styleUrls: ['./recuperar-usuario.component.css']
})
export class RecuperarUsuarioComponent implements OnInit {

  token: string;
  validToken: boolean;
  validUser: boolean;
  public pwd: string;
  pwdConfirm: string;
  barLabel: string = "Força de senha:";
  myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  constructor(private route: ActivatedRoute, 
    private loginService: LoginusuarioService) { }

  ngOnInit() {
    this.VerificarTokenUsuario();
  }

  SubmitPwd(form: FormGroup){
    let recuperacaoUsuario = {
      Token: this.route.snapshot.queryParamMap.get('token'),
       Senha: form.value.pwd,
       ConfirmacaoSenha: form.value.pwdConfirm
    }
    this.loginService.recuperarSenha(recuperacaoUsuario).subscribe(result=> {
      this.validUser = result;
    });
  }

  VerificarTokenUsuario() {
    this.token = this.route.snapshot.queryParamMap.get('token');
    if (this.token != null) {
      this.loginService.validarUsuario(this.token).subscribe(result => {
        if (result) {
          this.validToken = true;
        }
        else {
         this.validToken = false;
        }
      })
    } else {
      this.validToken = false;
    }
  }
}
