assert.exists('.foo');
assert.exists('.foo', 'custom message');

assert.exists('.foo', 2);
assert.exists('.foo', 2, 'custom message');

let message = 'foo';
function selector() {
  return '.test';
}
assert.exists(selector(), message);

assert.equal(true);
