const { validateBug } = require('../../src/utils/validation');

test('valid bug', () => {
  const result = validateBug({title:'Fix bug', status:'open'});
  expect(result.valid).toBe(true);
});

test('invalid bug missing title', () => {
  const result = validateBug({status:'open'});
  expect(result.valid).toBe(false);
  expect(result.errors).toContain('title');
});
