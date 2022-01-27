import { Component, OnInit } from '@angular/core';

import { RefreshDto } from '@pages/auth/interfaces/auth.interface';
import { AuthService } from '@pages/auth/services/auth.service';
import { UsersService } from '@pages/users/services/users.service';
import { StorageService } from '@shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.authService.auth$.subscribe((auth) => {
      if (auth == null && this.usersService.userValue == null) return;
      if (auth != null) return this.usersService.getMe();
      return this.usersService.setUser();
    });

    const refreshToken = this.storageService.getRefreshToken();
    if (refreshToken == null) return;

    const refreshDto: RefreshDto = {
      refresh: refreshToken,
    };
    this.authService.refresh(refreshDto).subscribe({
      error: () => this.storageService.removeRefreshToken(),
    });
  }
}
