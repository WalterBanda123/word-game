import { Injectable } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);

  constructor(
    private authenticator: AuthenticatorService,
    private router: Router
  ) {

    this.authenticator.subscribe(({ authStatus, user }) => {
      if (authStatus === 'authenticated' && user) {
        this.userSubject.next(user);
        this.router.navigate(['/main']);
      } else {
        this.userSubject.next(null);
      }
    });
  }

  getCurrentUser() {
    return this.userSubject.asObservable();
  }
}
