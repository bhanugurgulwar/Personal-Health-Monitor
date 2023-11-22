import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { from } from 'rxjs';

export default function authGuard() {

  const router = inject(Router);
  const storageService = inject(StorageService);
  
  return new Promise((resolve, reject) => {
    from(storageService.get("userToken")).subscribe({
      next: (token: any) => {
        if (token) {
          resolve(true);
        } else {
          router.navigateByUrl("/auth/login")
          reject();
        }
      }, error: (err: any) => {
        router.navigateByUrl("/auth/login")
        reject();
      }
    });
  });
}

export function authGuardLogin() {

  const router = inject(Router);
  const storageService = inject(StorageService);
  
  return new Promise((resolve, reject) => {
    from(storageService.get("userToken")).subscribe({
      next: (token: any) => {
        if (!token) {
          resolve(true);
        } else {
          router.navigateByUrl("/tabs")
          reject();
        }
      }, error: (err: any) => {
        router.navigateByUrl("/tabs")
        reject();
      }
    });
  });
}