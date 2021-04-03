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
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



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
