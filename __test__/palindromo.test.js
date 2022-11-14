//test

const palindromo = require('../utils/palindromo.js');

test ('palindromo de fran',()=>{
    const result = palindromo('fran')
    expect(result).toBe('narf')
})

test ('palindromo de silvia',()=>{
    const result = palindromo('silvia')
    expect(result).toBe('aivlis')
})

test ('palindromo de damian',()=>{
    const result = palindromo('damian')
    expect(result).toBe('naimad')
})