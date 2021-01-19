import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Versiculo } from '../core/Models/Versiculo';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class VersiculoserviceService {

  ambiente:string;
  constructor(private http:HttpClient) { 
    this.ambiente = environment.hostApi;
  }

  RandomVersiculo(): Observable<Versiculo> {
   return this.http.get<Versiculo>(this.ambiente +'/Versiculo/BuscarVersiculoRamdom',httpOptions);
  }

}
