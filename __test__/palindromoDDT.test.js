const palindromo = require('../utils/palindromo.js');

describe('palindromo', () => {
    test.each`
      firstValue  | expectedResult    
      ${'eleonor'}  | ${'ronoele'}
      ${'erwan'}    | ${'nawre'}
      


    `('$firstValue return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });