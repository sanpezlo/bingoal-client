import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthGuard } from '@shared/guards/auth/auth.guard';

@Injectable({
  providedIn: 'root',
})
export class NegativeAuthGuard implements CanActivate {
  constructor(private readonly authGuard: AuthGuard) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authGuard.canActivate(route, state).pipe(map((auth) => !auth));
  }
}
