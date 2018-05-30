assert.contains('.foo', 'stuff');
assert.contains('.foo', 'stuff', 'custom message');
assert.contains(selector(), contents());

assert.within('.test-profile-revision', function(t) {
  t.contains('.foo', 'stuff');
  t.contains('.foo', 'stuff', 'custom message');
  t.contains(selector(), contents());
});

function selector() {
  return '.foo';
}

function contents() {
  return 'stuff';
}
