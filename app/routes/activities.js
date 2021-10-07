import Route from '@ember/routing/route';

export default class ActivitiesRoute extends Route {
  model() {
    return this.store.findAll('activity')
  }

}
