var RSVP = require('rsvp');

module.exports = {

  name: 'ember-cli-offscreen-nav',

  normalizeEntityName: function() {},

  afterInstall: function() {
    var addonPackages = [
      {name: 'ember-gestures', target: '1.0.0'}
    ];

    return RSVP.all([
      this.addAddonsToProject({ packages: addonPackages })
    ]);
  }
};
