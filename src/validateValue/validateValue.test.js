const validateValue = require('./validateValue');

test( 'Correct value', () => {
	expect(validateValue(50)).toBe(true);
})

describe('validateValue', () => {
	test( 'Correct value', () => {
		expect(validateValue(50)).toBe(true);
	})
	test( 'the value is less than the correct one', () => {
		expect(validateValue(-1)).toBe(false);
	})
	test( 'the value is greater than the correct one', () => {
		expect(validateValue(101)).toBe(false);
	})
	test( 'boundary value from below', () => {
		expect(validateValue(0)).toBe(true);
	})
	test( 'boundary value from above', () => {
		expect(validateValue(100)).toBe(true);
	})
})
