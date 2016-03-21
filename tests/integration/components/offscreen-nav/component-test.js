import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('offscreen-nav', 'Integration | Component | offscreen nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{offscreen-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#offscreen-nav}}
      template block text
    {{/offscreen-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
