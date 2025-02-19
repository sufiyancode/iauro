import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const checkLoginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isloggedIn = localStorage.getItem('user');

  if (isloggedIn !== null) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
