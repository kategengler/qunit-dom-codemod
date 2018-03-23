assert.contains('.foo', 'stuff');
assert.contains('.foo', 'stuff', 'custom message');
assert.contains(selector(), contents());

function selector() {
  return '.foo';
}

function contents() {
  return 'stuff';
}
