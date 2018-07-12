import { CanActivate } from "@angular/Router";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot } from "@angular/Router";
import { RouterStateSnapshot } from "@angular/Router";
import { Injectable } from "@angular/core";



@Injectable()
export class AuthGuard implements CanActivate{

constructor(private authService :AuthService){}

    canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot){
           return this.authService.isAuthenticated();
    }
}