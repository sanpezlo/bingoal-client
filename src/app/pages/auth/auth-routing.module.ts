import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@pages/auth/login/login.component';
import { RegisterComponent } from '@pages/auth/register/register.component';
import { NegativeAuthGuard } from '@shared/guards/negativeAuth/negative-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NegativeAuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NegativeAuthGuard],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
