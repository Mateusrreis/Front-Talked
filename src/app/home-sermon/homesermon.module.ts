import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSermonComponent } from './home-sermon.component';
import { VersiculocomponentComponent } from '../versiculocomponent/versiculocomponent.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';



@NgModule({
  declarations: [
    HomeSermonComponent,
    VersiculocomponentComponent,
    SettingsUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[VersiculocomponentComponent]
})
export class HomesermonModule { }
