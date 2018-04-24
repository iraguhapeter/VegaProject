import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
    | Observable<boolean>
    | Promise<boolean> {
      
    if (!this.user.isLoggedIn()) {
      this.router.navigate(['/account/login']);
      return false;
    }
    return true;
  }

}

