import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Amplify, ResourcesConfig } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { RouterOutlet } from '@angular/router';
import { amplifyConfig } from './aws-config';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "",
      userPoolClientId: ""
    }
  }
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
}
