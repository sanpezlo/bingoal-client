import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, concatAll, map, Observable } from 'rxjs';

import { RefreshDto } from '@app/pages/auth/interfaces/auth.interface';
import { AuthService } from '@app/pages/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.setAutorizationHeader(req, next).pipe(
      catchError((error) => this.refreshInterceptor(req, next, error))
    );
  }

  setAutorizationHeader(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const auth = this.authService.authValue;
    if (auth == null) return next.handle(req);

    const newReq = req.clone({
      setHeaders: {
        Authorization: `${auth.token_type} ${auth.access_token}`,
      },
    });
    return next.handle(newReq);
  }

  refreshInterceptor(req: HttpRequest<any>, next: HttpHandler, error: any) {
    if (error.error.statusCode != 401) throw error;

    const auth = this.authService.authValue;
    if (auth == null) throw error;

    const refreshDto: RefreshDto = {
      refresh: auth.refresh_token,
    };
    return this.authService.refresh(refreshDto).pipe(
      map(() => this.setAutorizationHeader(req, next)),
      catchError((err) => {
        throw error;
      }),
      concatAll()
    );
  }
}
