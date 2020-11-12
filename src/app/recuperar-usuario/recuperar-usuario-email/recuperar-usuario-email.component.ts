import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginusuarioService } from 'src/app/login/loginusuario.service';

@Component({
  selector: 'app-recuperar-usuario-email',
  templateUrl: './recuperar-usuario-email.component.html',
  styleUrls: ['./recuperar-usuario-email.component.css']
})
export class RecuperarUsuarioEmailComponent implements OnInit {
  Email : string;
  constructor(private loginService : LoginusuarioService, private fb : FormBuilder) { }
  formularioEmailRecuperacao : FormGroup;
  ngOnInit() {
    this.formularioEmailRecuperacao = this.fb.group({
      email:['',Validators.required,Validators.email]
    });
  }



  EnviarSolicitacao(){
   this.Email = this.formularioEmailRecuperacao.value.email;
   this.loginService.solicitacaoUsuario(this.Email)
  }

}
