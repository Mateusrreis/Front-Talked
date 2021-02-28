import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomesermonModule } from '../home-sermon/homesermon.module';
import { MenuModule } from '../menu/menu.module';
import { RecuperarUsuarioComponent } from '../recuperar-usuario/recuperar-usuario.component';
import { RecuperarUsuarioEmailComponent } from '../recuperar-usuario/recuperar-usuario-email/recuperar-usuario-email.component';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { PasswordDirectiveDirective } from '../core/password-directive.directive';
import { MatButtonModule, MatCardModule, MatCheckbox, MatCheckboxModule, MatFormField, MatFormFieldModule, MatGridList, MatGridListModule, MatIconModule, MatInputModule } from '@angular/material';





@NgModule({
  declarations: [
    LoginComponent,
    CadastroLoginComponent,
    RecuperarUsuarioComponent,
    RecuperarUsuarioEmailComponent,
    PasswordDirectiveDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomesermonModule,
    MenuModule,
    PasswordStrengthBarModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class LoginModule { }
