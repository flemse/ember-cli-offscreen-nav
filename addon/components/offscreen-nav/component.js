import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import layout from './template';

export default Ember.Component.extend(RecognizerMixin, {
  service: Ember.inject.service('offscreen-nav'),
  recognizers: 'pan',
  classNames: 'offscreen-nav',
  classNameBindings: 'shown:on:off',
  shown: Ember.computed.alias('service.shown'),
  layout,
  transform: { left: 0 },

  panLeft(ev) { this.get('service').hide(); },
  panRight(ev) { this.get('service').show(); },
  panMove(ev) {
    this.updateTransform(ev);
    Ember.run.throttle(this, this.doUpdateStyle, 50);
  },
  panEnd(e) {
    this.resetTransform();
  },
  doUpdateStyle() {
    this.$().css(this.transform);
  },
  updateTransform(ev) {
    let center = ev.originalEvent.gesture.center;
    let width = this.$().width();
    this.transform.left = center.x - width;
  },
  resetTransform() {
    this.transform.left = 0;
    this.$().prop('style').removeProperty('left');
  }
});
