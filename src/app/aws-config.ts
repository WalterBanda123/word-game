import { ResourcesConfig } from 'aws-amplify';

export const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_123456789',
      userPoolWebClientId: '123 456 789',
    }
  }
};
