import Route from '@ember/routing/route';

export default class DogsRoute extends Route {
  model() {
    return this.store.findAll('dog')
  }
}
