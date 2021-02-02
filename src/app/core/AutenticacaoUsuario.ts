import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AutenticacaoUsuario implements CanActivate {

    constructor(private router: Router, private jwtHelper: JwtHelperService) { }
    canActivate(): boolean {
        const token = localStorage.getItem('token');
        if (token != null && !this.jwtHelper.isTokenExpired()) {
            return true;
        } else {
            return false;
        }
    }
}