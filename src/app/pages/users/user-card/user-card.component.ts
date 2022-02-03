import { Component, Input } from '@angular/core';

import { IUser, Role } from '@pages/users/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user!: IUser;
  constructor() {}

  isAdmin() {
    return this.user.roles.includes(Role.Admin);
  }
}
