import { Component, OnInit } from '@angular/core';

import { IUser } from '@app/pages/users/interfaces/user.interface';
import { UsersService } from '@app/pages/users/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private user: IUser | null = null;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
