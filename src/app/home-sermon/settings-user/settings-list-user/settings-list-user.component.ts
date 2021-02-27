import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/core/Models/Usuario';
import { SettingsUsersService } from './settings-users.service';

@Component({
  selector: 'settings-list-user',
  templateUrl: './settings-list-user.component.html',
  styleUrls: ['./settings-list-user.component.css']
})
export class SettingsListUserComponent implements OnInit,OnChanges {

  constructor(private usersettings: SettingsUsersService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.numberPagination(changes.event);
  }
  ListUser : Usuario[] = null;
  AllUsers : number;
  Pagination : number[] = [];
   ngOnInit() {
     this.listUser();
  }

  listUser(){
    let page =1;
    this.usersettings.listUser(page-1).subscribe(result=>{
      this.ListUser = result.listPessoas
      this.AllUsers = result.allUsers
      this.numberPagination(Math.ceil(result.allUsers/10));
    });
  }

  numberPagination(pagination){
    let numberAllUser = pagination
    for (let i = 1; i <= numberAllUser ;i++)
    {
      this.Pagination.push(i);
    }
  }

}
