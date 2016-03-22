import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('offscreen-nav', 'Integration | Component | offscreen nav', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#offscreen-nav}}
      template block text
    {{/offscreen-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it reacts to pan events', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#offscreen-nav}}
      template block text
    {{/offscreen-nav}}
  `);

  let nav = this.$('.offscreen-nav');
  assert.equal(nav.is('.off'), true);

  nav.trigger('panright');

  assert.equal(nav.is('.on'), true);

  nav.trigger('panleft');

  assert.equal(nav.is('.off'), true);
});
