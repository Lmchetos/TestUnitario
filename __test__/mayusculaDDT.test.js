const isUpperCase = require('../utils/esmayuscula.js');

describe('Uppercase', () => {
    test.each`
      firstValue  | expectedResult    
      ${'HELLO'}    | ${true}
      ${'PURI'}     | ${true}
      ${'silvia'}     | ${false}

      


    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });