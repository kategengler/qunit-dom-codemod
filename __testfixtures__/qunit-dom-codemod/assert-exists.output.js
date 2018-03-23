assert.dom('.foo').exists();
assert.dom('.foo').exists('custom message');

assert.dom('.foo').exists({ count: 2 });
assert.dom('.foo').exists({ count: 2 }, 'custom message');

let message = 'foo';
function selector() {
  return '.test';
}
assert.dom(selector()).exists(message);

assert.equal(true);
