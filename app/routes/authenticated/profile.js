import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';


export default class ProfileRoute extends Route {
  @service store;
  @service session;

  async model() {
    return this.store.findRecord('user', 1)
    // this.session.data.authenticated.tokenData.user._id
  }
}
