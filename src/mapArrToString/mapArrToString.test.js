const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
	test( 'Correct value', () => {
		expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
	})
	test( 'Not an array of numbers', () => {
		expect(mapArrToString([1, 2, 3, null, undefined, '1'])).toEqual(['1', '2', '3']);
	})
	test( 'Empty array', () => {
		expect(mapArrToString([])).toEqual([]);
	})
	test( 'not equal value', () => {
		expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
	})
})
