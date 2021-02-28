import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroLoginComponent } from './login/cadastro-login/cadastro-login.component';
import { HomeSermonComponent } from './home-sermon/home-sermon.component';
import { MenuLateralComponent } from './menu/menu-lateral/menu-lateral.component';
import { AutenticacaoUsuario } from './core/AutenticacaoUsuario';
import { RecuperarUsuarioComponent } from './recuperar-usuario/recuperar-usuario.component';
import { RecuperarUsuarioEmailComponent } from './recuperar-usuario/recuperar-usuario-email/recuperar-usuario-email.component';
import { SettingsUserComponent } from './home-sermon/settings-user/settings-user.component';
import { SettingsListUserComponent } from './home-sermon/settings-user/settings-list-user/settings-list-user.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Cadastro', component: CadastroLoginComponent },
  { path: 'RecuperacaoUsuario', component: RecuperarUsuarioComponent },
  { path: 'ValidacaoUsuario', component: RecuperarUsuarioEmailComponent },
  {
    path: 'Home',
    component: MenuLateralComponent,
    children: [
      {
        path: 'Sermon',
        component: HomeSermonComponent,
        canActivate: [AutenticacaoUsuario]
        //resolve:{versiculoresolver : VersiculoResolver}
      },
      {
        path:'Configuracoes',
        component: SettingsUserComponent,
        canActivate:[AutenticacaoUsuario]
      },
      {
        path:'ListarUsuarios',
        component:SettingsListUserComponent,
        canActivate:[AutenticacaoUsuario]
      }
    ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
