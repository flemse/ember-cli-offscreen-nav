import Ember from 'ember';

export default Ember.Service.extend({
  shown: false,
  show() {
    this.set('shown', true);
  },
  hide() {
    this.set('shown', false);
  },
  toggle() {
    this.toggleProperty('shown');
  }
});
