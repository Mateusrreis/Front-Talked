import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSermonComponent } from './home-sermon.component';
import { VersiculocomponentComponent } from '../versiculocomponent/versiculocomponent.component';



@NgModule({
  declarations: [
    HomeSermonComponent,
    VersiculocomponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[VersiculocomponentComponent]
})
export class HomesermonModule { }
