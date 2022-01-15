import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (SettingComponent.logged) {
      //   return true;
      // }
      // else {
      //   const token = window.localStorage.getItem('authToken');

      //   if (token) {
      //     SettingComponent.logged = true;
      //     SettingComponent.authToken = atob(token);
      //     return true;
      //   } else {
      //     this.router.navigate(['login']);
      //     return false;
      //   }

      //   this.router.navigate(['login']);
        return true;
      }
  }
