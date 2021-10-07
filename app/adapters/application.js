import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // @service session;
  //
  headers = {
    // 'Access-Control-Allow-Origin': '*'
    // secret_token: this.session.data.authenticated.token
  }
  namespace = 'api';
  host = 'http://localhost:8000';



  buildURL(...args) {
    return `${super.buildURL(...args)}/`;
  }

  // @computed('session.data.authenticated.access_token')
  // get headers() {
  //   let headers = {};
  //   if (this.session.isAuthenticated) {
  //     // OAuth 2
  //     headers['Authorization'] = `Bearer ${this.session.data.authenticated.access_token}`;
  //   }
  //
  //   return headers;
  // }

}
