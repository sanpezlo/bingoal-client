import { Component, OnInit } from '@angular/core';

import { IUser } from '@app/pages/users/interfaces/user.interface';
import { UsersService } from '@app/pages/users/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isOpen: boolean = false;
  isOpenDropdown: boolean = false;

  constructor(public readonly usersService: UsersService) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
