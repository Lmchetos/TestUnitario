// TEST

const sum = require('../utils/suma');

describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${3}       | ${1}        | ${4}
      ${-4}      | ${1}        | ${-3}
      ${-9}      | ${8}        | ${-1}
      ${80}      | ${7}        | ${87}
      ${10}      | ${-1}       | ${9}


    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });