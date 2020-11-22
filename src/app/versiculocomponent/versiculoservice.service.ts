import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Versiculo } from '../core/Models/Versiculo';



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

  constructor(private http:HttpClient) { }

  RandomVersiculo(): Observable<Versiculo> {
   return this.http.post<Versiculo>('https://localhost:44301/Home/BuscarVersiculoRamdom',httpOptions);
  }

}
