import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default class OAuth2Authenticator extends OAuth2PasswordGrantAuthenticator {
  serverTokenEndpoint = 'https://dog-meets-api.herokuapp.com/auth/';
  clientId = 'test';
  clientSecret = 'test';
  Headers = {clientSecret: 'test'}
}
