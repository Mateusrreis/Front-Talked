import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroLoginComponent } from './login/cadastro-login/cadastro-login.component';
import { HomeSermonComponent } from './home-sermon/home-sermon.component';
import { MenuLateralComponent } from './menu/menu-lateral/menu-lateral.component';
import { VersiculoResolver } from './versiculocomponent/versiculoresolver.resolver';
import { AutenticacaoUsuario } from './core/AutenticacaoUsuario';


const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path: 'cadastrologin', component: CadastroLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'Home',
    component: MenuLateralComponent,
    children: [
      { path: 'Sermon', component: HomeSermonComponent, canActivate: [AutenticacaoUsuario] , resolve:{versiculoresolver : VersiculoResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
