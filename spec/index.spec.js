describe('Sample Test', () => {
  test('Should pass', (next) => {
    const result = 3 + 4;

    expect(result).toBe(7);
    next();
  });
});
