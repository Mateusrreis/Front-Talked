import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent implements OnInit {

  constructor(rotas:Router) { }

  ngOnInit() {
  }

  ChangeColor($event) {
    let listdiv = <HTMLElement>$event;
    if (listdiv.classList.contains("active")) {
      listdiv.classList.remove("active");
    }
    else {
      listdiv.classList.add("active");
    }
  }

  ChangeText($event){
    let text = <HTMLElement>$event;
  }


}
