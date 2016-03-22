import Ember from 'ember';

export default Ember.Controller.extend({
  service: Ember.inject.service('offscreen-nav'),
  navShownBinding: 'service.shown',
  actions: {
    toggleNav() {
      this.get('service').toggle();
    }
  }
});
