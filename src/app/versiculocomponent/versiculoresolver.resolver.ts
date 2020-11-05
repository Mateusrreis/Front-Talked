import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Versiculo } from "../core/Models/Versiculo";
import { VersiculoserviceService } from "./versiculoservice.service";

@Injectable({providedIn:'root'})
export class VersiculoResolver implements Resolve<Versiculo>{
constructor(private service: VersiculoserviceService){}

resolve(route : ActivatedRouteSnapshot, state :RouterStateSnapshot) :Observable<Versiculo> {
    return this.service.RandomVersiculo();
}
}