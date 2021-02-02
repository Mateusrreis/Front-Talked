import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSermonComponent } from './home-sermon.component';
import { VersiculocomponentComponent } from '../versiculocomponent/versiculocomponent.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsListUserComponent } from './settings-user/settings-list-user/settings-list-user.component';



@NgModule({
  declarations: [
    HomeSermonComponent,
    VersiculocomponentComponent,
    SettingsUserComponent,
    SettingsListUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[VersiculocomponentComponent]
})
export class HomesermonModule { }
