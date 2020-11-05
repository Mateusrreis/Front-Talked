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

  versiculo : Versiculo;
  constructor(private serviceVersiculo: VersiculoserviceService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.versiculo = this.route.snapshot.data['versiculoresolver'];
  }

  CarregarVersiculo(){
   this.serviceVersiculo.RandomVersiculo().subscribe(result => {
    if(result===null)
    {
       this.versiculo = result;
    }else{
       this.versiculo.text = "Eita nenhum versiculo carregado :(";
    }
   });
  }

}
