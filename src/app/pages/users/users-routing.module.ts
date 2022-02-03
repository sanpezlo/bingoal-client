import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from '@pages/users/users.component';
import { UserComponent } from '@pages/users/user/user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
