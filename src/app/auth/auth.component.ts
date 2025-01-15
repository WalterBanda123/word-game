import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AmplifyAuthenticatorModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthComponent implements OnInit {
  auth = inject(AuthenticatorService);
  router = inject(Router)

  ngOnInit(): void {
    this.auth.subscribe((response) => {
      if (response.authStatus === 'authenticated') {
        this.router.navigate(['/main']);
        console.log(response.user)
      }
    });
  }

  guestUsername: string = '';



  continueAsGuest() {
    // Opens the modal through bootstrap
    const modal = new bootstrap.Modal(document.getElementById('guestModal')!);
    modal.show();
  }

  handleGuestSubmit() {
    if (this.guestUsername.trim()) {
      localStorage.setItem('guestUser', this.guestUsername);
      const modal = bootstrap.Modal.getInstance(document.getElementById('guestModal')!)
      if (modal) modal.hide();
      this.router.navigate(['/main']);
      //idea here is you create a demo account for them to authenticate.
    }
  }
}
