import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomesermonModule } from '../home-sermon/homesermon.module';
import { MenuModule } from '../menu/menu.module';
import { RecuperarUsuarioComponent } from '../recuperar-usuario/recuperar-usuario.component';




@NgModule({
  declarations: [
    LoginComponent,
    CadastroLoginComponent,
    RecuperarUsuarioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomesermonModule,
    MenuModule,
    
  ]
})
export class LoginModule { }
