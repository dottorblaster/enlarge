var test = require('tape'),
  enlarge = require('./');

test('string padding', function(assert) {
  assert.plan(5);
  assert.strictEqual(enlarge('foobar', 9), '   foobar');
  assert.strictEqual(enlarge('foobar', 9, '@'), '@@@foobar');
  assert.strictEqual(enlarge('foobar', 9, 0), '000foobar');
  assert.strictEqual(enlarge('foobar', -4), 'foobar');
  assert.strictEqual(enlarge('foobar'), 'foobar');
});
