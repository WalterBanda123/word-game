import { CanActivateFn } from '@angular/router';

export const protectGuard: CanActivateFn = (route, state) => {
  return true;
};
