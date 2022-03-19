import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from '@pages/users/services/users.service';
import { IUser } from '@pages/users/interfaces/user.interface';

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
