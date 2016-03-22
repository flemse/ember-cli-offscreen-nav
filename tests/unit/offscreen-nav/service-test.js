import { moduleFor, test } from 'ember-qunit';

moduleFor('service:offscreen-nav', 'Unit | Service | offscreen nav', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('default value', function(assert) {
  let service = this.subject();

  assert.equal(service.get('shown'), false);
});

test('toggle', function(assert) {
  let service = this.subject();

  service.toggle();

  assert.equal(service.get('shown'), true);

  service.toggle();

  assert.equal(service.get('shown'), false);
});

test('show', function(assert) {
  let service = this.subject();

  service.set('shown', false);
  service.show();

  assert.equal(service.get('shown'), true);
});

test('hide', function(assert) {
  let service = this.subject();

  service.set('shown', true);
  service.hide();

  assert.equal(service.get('shown'), false);
});
