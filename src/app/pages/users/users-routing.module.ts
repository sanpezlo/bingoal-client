import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from '@pages/users/users.component';
import { MeComponent } from '@pages/users/me/me.component';
import { UserComponent } from '@pages/users/user/user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'me', component: MeComponent },
  { path: ':id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
