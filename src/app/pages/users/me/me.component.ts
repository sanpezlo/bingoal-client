import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '@pages/users/interfaces/user.interface';
import { UsersService } from '@pages/users/services/users.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  user$!: Observable<IUser>;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.user$ = this.usersService.me();
  }
}
