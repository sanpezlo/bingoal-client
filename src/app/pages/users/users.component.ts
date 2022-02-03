import { Component, OnInit } from '@angular/core';

import { UsersService } from '@pages/users/services/users.service';
import { Observable } from 'rxjs';

import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<IUser[]>;
  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.find();
  }
}
