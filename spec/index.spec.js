const index = require('../src/index');

describe('Sample Test', () => {
  test('Should pass', (next) => {
    const result = index.addTwoNUmbers(3, 4);

    expect(result).toBe(7);
    next();
  });
});
