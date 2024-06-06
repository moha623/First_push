import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
 
  authChange = new Subject<boolean>();
  navChange = new Subject<boolean>();

  public user: User | any;

  constructor(private router:Router){
  }
  registerUser(authDate: AuthData) {
    this.user = {
      email: authDate.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
   this.authSuccesfully();
  }
  login(authDate: AuthData) {
    this.user = {
      email: authDate.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authSuccesfully();

  }
  logout() {
    this.user = null;
    this.authChange.next(false);
    this.navChange.next(false);
    this.router.navigate(['/login']);

  }
  getUser() {
    return { ...this.user };
  }
  isAuth() {
    return this.user != null;
  }
  private authSuccesfully(){
    this.authChange.next(true);
    this.navChange.next(true);
    this.router.navigate(['/training']);
  }
}
