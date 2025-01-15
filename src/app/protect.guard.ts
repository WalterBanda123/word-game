import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';


export const protectGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthenticatorService);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    auth.subscribe((response) => {

      if (response.authStatus === 'authenticated') {
        resolve(true);
      } else {
        router.navigate(['/account/auth']);
        resolve(false);
      }
    });
  })
};
