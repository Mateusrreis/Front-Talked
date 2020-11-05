import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Versiculo } from '../core/Models/Versiculo';
import { VersiculoserviceService } from './versiculoservice.service';

@Component({
  selector: 'app-versiculocomponent',
  templateUrl: './versiculocomponent.component.html',
  styleUrls: ['./versiculocomponent.component.css']
})
export class VersiculocomponentComponent implements OnInit {

  versiculo: Versiculo;
  constructor(private serviceVersiculo: VersiculoserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.CarregarVersiculo();
  }

  CarregarVersiculo() {
    let sessionVersiculo = JSON.parse(sessionStorage.getItem("versiculo"));
    if (sessionVersiculo) {
      this.versiculo = sessionVersiculo;
    } else {
      this.serviceVersiculo.RandomVersiculo().subscribe(result => {
        if (result != null) {
          sessionStorage.setItem("versiculo", JSON.stringify(result));
          return this.versiculo = result;
        }
      })
    };
  }

}
