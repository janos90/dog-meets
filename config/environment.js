'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'dog-meets',
    environment,
    rootURL: '/',
    locationType: 'auto',
    apiHost: "localhost:8000",

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      // ... other stuff here
      'connect-src': "'self' http://localhost:8000"
    }

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-simple-auth-token'] = {
      tokenDataPropertyName: 'token', // Key in session to store token data
      refreshAccessTokens: true, // Enables access token refreshing
      tokenExpirationInvalidateSession: true, // Enables session invalidation on token expiration
      serverTokenEndpoint: "https://dog-meets-api.herokuapp.com/auth/",

      serverTokenRefreshEndpoint: '/api/token-refresh/', // Server endpoint to send refresh request
      refreshTokenPropertyName: 'refresh_token', // Key in server response that contains the refresh token
      tokenExpireName: 'exp', // Field containing token expiration
      refreshLeeway: 0, // Amount of time in seconds to send refresh request before token expiration
      tokenRefreshInvalidateSessionResponseCodes: [401, 403], // Array of response codes that cause an immediate session invalidation if received when attempting to refresh the token
      refreshAccessTokenRetryAttempts: 0, // Number of token retry attempts to make
      refreshAccessTokenRetryTimeout: 1000, // Amount of time in milliseconds to wait between token refresh retry attempts
      tokenRefreshFailInvalidateSession: false // Enables session invalidation if all token refresh retry requests fail
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.contentSecurityPolicy = {
      // ... other stuff here
      'connect-src': "'self' http://localhost:8000"
    }
    ENV['ember-simple-auth-token'] = {
      tokenDataPropertyName: 'tokenData', // Key in session to store token data
      refreshAccessTokens: true, // Enables access token refreshing
      tokenExpirationInvalidateSession: true, // Enables session invalidation on token expiration
      serverTokenEndpoint: "localhost:8000/auth/",

      serverTokenRefreshEndpoint: '/api/token-refresh/', // Server endpoint to send refresh request
      refreshTokenPropertyName: 'refresh_token', // Key in server response that contains the refresh token
      tokenExpireName: 'exp', // Field containing token expiration
      refreshLeeway: 0, // Amount of time in seconds to send refresh request before token expiration
      tokenRefreshInvalidateSessionResponseCodes: [401, 403], // Array of response codes that cause an immediate session invalidation if received when attempting to refresh the token
      refreshAccessTokenRetryAttempts: 0, // Number of token retry attempts to make
      refreshAccessTokenRetryTimeout: 1000, // Amount of time in milliseconds to wait between token refresh retry attempts
      tokenRefreshFailInvalidateSession: false // Enables session invalidation if all token refresh retry requests fail
    };

    // here you can enable a production-specific feature
  }

  return ENV;
};
