import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from '@pages/users/users-routing.module';
import { UsersComponent } from '@pages/users/users.component';
import { UserComponent } from '@pages/users/user/user.component';
import { SharedModule } from '@app/shared/shared.module';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, UserCardComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
