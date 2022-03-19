import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from '@pages/users/users-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { UsersComponent } from '@pages/users/users.component';
import { UserComponent } from '@pages/users/user/user.component';
import { UserCardComponent } from '@pages/users/user-card/user-card.component';
import { MeComponent } from '@pages/users/me/me.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, UserCardComponent, MeComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
