import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListUsuarios } from 'src/app/core/Models/ListUsuarios';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class SettingsUsersService {

  ambiente: string;
  constructor(private http: HttpClient) {
    this.ambiente = environment.hostApi;
  }

  listUser(page: number = 0){
    return this.http.get<ListUsuarios>(this.ambiente + `/Usuario/ListAllUsers?page=${page}`,httpOptions);
  }

}
