import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import layout from './template';

export default Ember.Component.extend(RecognizerMixin, {
  recognizers: 'pan',
  classNames: 'offscreen-nav',
  classNameBindings: 'shown:on:off',
  shown: true,
  layout,

  panLeft(ev) { this.set('shown', false); },
  panRight(ev) { this.set('shown', true); },
  panStart(e) {
    this.startX = Math.round((window.offsetWidth - this.$().offsetWidth) / 2);
  },
  panMove(e) {
    this._trigger(e);
  },
  panEnd(e) {
    this.$().prop('style').removeProperty('left');
  },
  _trigger(ev) {
    let deltaX = ev.originalEvent.gesture.deltaX;
    this.$().css('left', deltaX);
    console.log(ev.originalEvent.gesture.deltaX);
  }
});
