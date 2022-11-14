//TEST

const sum = require('../utils/suma');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('adds -8 + 6 to equal -2', ()=>{
    expect(sum(-8,6)).toBe(-2);
})

test('adds -8 + -5 to equal -13', ()=>{
    expect(sum(-8,-5)).toBe(-13);
})