const { classes } = require('../../src/sampleDataSource');

describe('getClientById', () => {
  test('Should return class with the correct id', (next) => {
    const ID = '3';
    const RESPONSE = [{
      id: '3',
      name: 'Pilates',
      location: 'Harlem',
    }];

    const result = classes.getClassById(ID);

    expect(result).toEqual(RESPONSE);
    next();
  });
});
