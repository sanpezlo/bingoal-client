import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, map } from 'rxjs';

import { IUser } from '@pages/users/interfaces/user.interface';
import { UsersService } from '@pages/users/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user$!: Observable<IUser>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      map((params) => params['id']),
      switchMap((id) => this.usersService.findOne({ id: id }))
    );
  }
}
