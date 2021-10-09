import EmberRouter from '@ember/routing/router';
import config from 'dog-meets/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('dogs');
  this.route('profile');
  this.route('activities');
  this.route('activity', { path: 'activity/:activity_id' });
  this.route('dog', { path: 'dog/:dog_id' });
});
