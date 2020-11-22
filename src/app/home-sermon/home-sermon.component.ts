import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home-sermon',
  templateUrl: './home-sermon.component.html',
  styleUrls: ['./home-sermon.component.css']
})
export class HomeSermonComponent implements OnInit {

  constructor(private jwtToken : JwtHelperService) { }
  User: any;
  ngOnInit() {
    this.verificarUsuario();
  }

  verificarUsuario(){
    this.User = this.jwtToken.decodeToken();
  }

}
