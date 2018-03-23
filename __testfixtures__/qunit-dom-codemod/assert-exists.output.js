assert.dom('.foo').exists();
assert.dom('.foo').exists('custom message');

assert.dom('.foo').exists({ count: 2 });
assert.dom('.foo').exists({ count: 2 }, 'custom message');

assert.equal(true);
