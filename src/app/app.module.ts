import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './menu/menu.module';
import { JwtModule } from '@auth0/angular-jwt';
import { RecuperarUsuarioComponent } from './recuperar-usuario/recuperar-usuario.component';
import { RecuperarUsuarioEmailComponent } from './recuperar-usuario/recuperar-usuario-email/recuperar-usuario-email.component';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MenuModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter : tokenGetter,
        allowedDomains: ["localhost:44301"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
