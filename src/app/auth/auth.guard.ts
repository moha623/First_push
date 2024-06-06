import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authServive: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Boolean|any {
    if (this.authServive.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
