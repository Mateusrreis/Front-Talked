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
  validUser: boolean;
  
  public pwd: string;
  pwdConfirm: string;
  barLabel: string = "Força de senha:";
  myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  constructor(private route: ActivatedRoute, 
    private loginService: LoginusuarioService) { }

  ngOnInit() {
    //this.VerificarTokenUsuario();
    this.validUser=true;
  }

  SubmitPwd(form){
    console.info(form);
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
