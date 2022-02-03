import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { isEqual } from 'lodash';

import { environment } from '@env/environment';
import {
  CreateUserDto,
  FindOneUserDto,
  FindUsersDto,
  IUser,
} from '@pages/users/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly url = `${environment.baseUrl}/v1/users`;
  private $user$ = new BehaviorSubject<IUser | null>(null);

  constructor(private readonly http: HttpClient) {}

  get user$() {
    return this.$user$.asObservable();
  }

  get userValue() {
    return this.$user$.getValue();
  }

  setUser(user: IUser | null = null) {
    if (isEqual(user, this.userValue)) return;
    this.$user$.next(user);
  }

  create(createUserDto: CreateUserDto): Observable<IUser> {
    return this.http
      .post<IUser>(this.url, createUserDto)
      .pipe(tap((user: IUser) => this.setUser(user)));
  }

  find(findUsersDto: FindUsersDto = {}): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url, {
      params: findUsersDto as { [param: string]: number },
    });
  }

  findOne(findOneUserDto: FindOneUserDto): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${findOneUserDto.id}`);
  }

  me(): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/me`).pipe(
      tap((user: IUser) => this.setUser(user)),
      catchError((error) => {
        this.setUser();
        throw error;
      })
    );
  }
}
