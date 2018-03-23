assert.dom('.foo').hasText('stuff');
assert.dom('.foo').hasText('stuff', 'custom message');
assert.dom(selector()).hasText(contents());

function selector() {
  return '.foo';
}

function contents() {
  return 'stuff';
}
