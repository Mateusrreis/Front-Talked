import { Component, OnInit } from '@angular/core';
import { LoginusuarioService } from '../loginusuario.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Usuario } from "./Usuario";
import { Router } from '@angular/router';
import { Validacoes } from '../../Validacoes/Validacoes';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro-login.component.html',
  styleUrls: ['./cadastro-login.component.css','./cadastro-login.component-mobile.css']
})
export class CadastroLoginComponent implements OnInit {
  public usuario = new Usuario();
  formularioDeCadastroUsuario: FormGroup;
  constructor(private servico: LoginusuarioService, private fb: FormBuilder, private rotas: Router, private toastr: ToastrService) { }

  validacaoEmail: boolean;

  ngOnInit(): void {
    this.validacaoEmail = false;
    this.criarformularioCadastro();
  }
  criarformularioCadastro() {
    this.formularioDeCadastroUsuario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      emails: this.fb.group({
       email: ['', [Validators.required, Validators.email]],
       ConfirmEmail: ['', [Validators.required]],
      }, { validators: Validacoes.validarConfirmCamposEmail()}),
      passwords: this.fb.group({
        senha: ['', [Validators.required, Validators.minLength(5)]],
        ConfirmSenha: ['', [Validators.required]]
      }, { validators: Validacoes.validarConfirmCamposSenha()})
    });
    let elemento = <HTMLInputElement>document.getElementById("enviar");
    elemento.disabled = false;
  }


  buscarEmail(email) {
    if (email.target.value.length > 8)
      this.servico.validarEmailExiste(email.target.value).subscribe((usuario) => {
        if (usuario)
          this.validacaoEmail = true;
        else
          this.validacaoEmail = false;
      });
  }

  enviarUsuario() {
    this.usuario.Nome = this.formularioDeCadastroUsuario.value.nome;
    this.usuario.Email = this.formularioDeCadastroUsuario.value.emails.email;
    this.usuario.ConfirmacaoEmail = this.formularioDeCadastroUsuario.value.emails.ConfirmEmail;
    this.usuario.Senha = this.formularioDeCadastroUsuario.value.passwords.senha;
    this.usuario.ConfirmacaoSenha = this.formularioDeCadastroUsuario.value.passwords.ConfirmSenha;
    this.servico.enviarUsuario(this.usuario).subscribe(result => {
      if (result !== null) {
        this.toastr.success('Usuario criado', 'Iremos te redirecionar para a tela de login');
        setTimeout(() => this.rotas.navigate(['/login']), 5000);
      }
    },
      error => this.toastr.error('Opa aconteceu algum erro', 'Verifique se as informações estão corretas')
    );
  }

  Cancelar() {
    this.rotas.navigate(['/login']);
  }

}
