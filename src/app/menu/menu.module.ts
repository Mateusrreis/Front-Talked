import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenuComponent,
    MenuLateralComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
