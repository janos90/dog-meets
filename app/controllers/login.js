import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import $ from 'jquery';

export default class LoginController extends Controller {
  @service session;

  @tracked error;
  @tracked username;
  @tracked password;

  @action
  async authenticate(e) {
    e.preventDefault();
    let { identification, password } = this;
    const credentials = {username:identification, password:password}
    try {
      await this.session.authenticate('authenticator:token', credentials);
    } catch(error) {
      console.log('error', error);
      alert('Incorrect Username or Password')
    }

    if (this.session.isAuthenticated) {
      this.transitionToRoute('authenticated');
    }
  }

  @action
  updateIdentification(e) {
    this.identification = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
  }

  @action
  forgotPassword(e) {
    // this.fadeOut(600)
    alert('For password recovery, email Garcij07@myunitec.ac.nz')
  }

  @action
  signUp(e){
    this.fadeOut(600);
    let self=this;
    setTimeout(function(){
      self.transitionToRoute('signup');
    }, 600)
  }
}
