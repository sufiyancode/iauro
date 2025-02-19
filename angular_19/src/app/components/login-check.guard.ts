import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginCheckGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedIn = localStorage.getItem('user');
  if (loggedIn !== null) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
