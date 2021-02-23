import { expect } from 'chai'

const romanNumeralMap = [{ number: 1, numeral: 'I'},
{ number: 2, numeral: 'II'}, 
{ number: 3, numeral: 'III'}, 
{ number: 4, numeral: 'IV'},
{ number: 5, numeral: 'V'},
{ number: 6, numeral: 'VI'},
{ number: 10, numeral: 'X'},
// { number: 50, numeral: 'L'},
// { number: 100, numeral: 'C'},
// { number: 500, numeral: 'D'}

]

const transformToRomanNumeral = (num) => {
    const numerals = ['I', 'V', "X"];

    if (num >= 10) return numerals[2];
    if (num === 6) return numerals[1] + numerals[0];
    if (num === 5) return numerals[1];
    if (num === 4) return numerals[0] + numerals[1];
    if (num >= 1) return numerals[0].repeat(num);
}

describe('Roman numerals', () => {
    romanNumeralMap.forEach(({number, numeral}) => 
    it(`should return ${numeral} when the input is ${number}`, () => {
        expect(transformToRomanNumeral(number)).to.equal(numeral);
    }))
})