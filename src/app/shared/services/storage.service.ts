import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly key = 'refresh';
  private sessionStorageService: Storage;

  constructor() {
    this.sessionStorageService = sessionStorage;
  }

  setRefreshToken(refreshToken: string) {
    this.sessionStorageService.setItem(this.key, refreshToken);
  }

  removeRefreshToken() {
    this.sessionStorageService.removeItem(this.key);
  }

  getRefreshToken() {
    return this.sessionStorageService.getItem(this.key) || null;
  }
}
