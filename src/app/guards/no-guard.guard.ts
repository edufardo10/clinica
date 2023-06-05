import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class NoGuardGuard implements CanActivate {
  constructor(public router:Router,public userService:UserService){

  }
  canActivate(
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()){
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
  hasUser(): boolean{
    if(!this.userService.isLogin()){
      return true;
    }
    return false;
  }

}
