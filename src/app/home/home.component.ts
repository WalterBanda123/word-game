import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  signInWithGoogle() {
    console.log('Google sign-in clicked');
  }

  signInWithEmail() {
    console.log('Email sign-in clicked');
  }

  playAsGuest() {
    this.router.navigate(['/main']);
  }
}
