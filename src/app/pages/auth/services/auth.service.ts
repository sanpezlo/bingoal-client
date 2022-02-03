import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, switchMap, tap } from 'rxjs';
import { isEqual } from 'lodash';

import { environment } from '@env/environment';
import { UsersService } from '@app/pages/users/services/users.service';
import {
  LoginDto,
  RefreshDto,
  RegisterDto,
  IAuth,
} from '@pages/auth/interfaces/auth.interface';
import { StorageService } from '@app/shared/services/storage.service';
import { CreateUserDto } from '@app/pages/users/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = `${environment.baseUrl}/v1/auth`;
  private $auth$ = new BehaviorSubject<IAuth | null>(null);

  constructor(
    private readonly http: HttpClient,
    private readonly usersService: UsersService,
    private readonly storageService: StorageService
  ) {}

  get auth$() {
    return this.$auth$.asObservable();
  }

  get authValue() {
    return this.$auth$.getValue();
  }

  setAuth(auth: IAuth | null = null) {
    if (isEqual(auth, this.authValue)) return;
    this.$auth$.next(auth);
  }

  login(loginDto: LoginDto): Observable<IAuth> {
    return this.http.post<IAuth>(`${this.url}/login`, loginDto).pipe(
      tap((auth: IAuth) => {
        this.setAuth(auth);
        this.storageService.setRefreshToken(auth.refresh_token);
      })
    );
  }

  register(registerDto: RegisterDto): Observable<IAuth> {
    const createUserDto: CreateUserDto = {
      name: registerDto.name,
      email: registerDto.email,
      password: registerDto.password,
    };
    return this.usersService.create(createUserDto).pipe(
      switchMap(() =>
        this.login({
          email: registerDto.email,
          password: registerDto.password,
        })
      )
    );
  }

  refresh(refreshDto: RefreshDto): Observable<IAuth> {
    return this.http.post<IAuth>(`${this.url}/refresh`, refreshDto).pipe(
      tap((auth: IAuth) => this.setAuth(auth)),
      catchError((error) => {
        this.setAuth();
        throw error;
      })
    );
  }
}
