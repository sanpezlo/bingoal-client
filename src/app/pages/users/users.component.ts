import { Component, OnInit } from '@angular/core';

import { UsersService } from '@pages/users/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private readonly usersService: UsersService) {}
}
