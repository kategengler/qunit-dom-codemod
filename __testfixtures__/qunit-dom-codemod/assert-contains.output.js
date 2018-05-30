assert.dom('.foo').hasText('stuff');
assert.dom('.foo').hasText('stuff', 'custom message');
assert.dom(selector()).hasText(contents());

assert.within('.test-profile-revision', function(t) {
  let context = find('.test-profile-revision');
  assert.dom('.foo', context).hasText('stuff');
  assert.dom('.foo', context).hasText('stuff', 'custom message');
  assert.dom(selector(), context).hasText(contents());
});

function selector() {
  return '.foo';
}

function contents() {
  return 'stuff';
}
