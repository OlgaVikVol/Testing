const { beforeEach, afterEach } = require('node:test');
const square = require('./square');

describe( 'square', () => {
	let mockValue;
	//Before each test
	beforeEach(() => {
		//Add an user to BD
	})
	//Once before all tests
	beforeAll(() => {
	})
	test( 'correct value', () => {
		// expect(square(2)).toBe(4);
		// expect(square(2)).toBeLessThan(5);
		// expect(square(2)).toBeGreaterThan(3);
		// expect(square(2)).not.toBeUndefined();
		// const spyMathPow = jest.spyOn(Math, 'pow');
		// square(2);
		// expect(spyMathPow).toBeCalledTimes(1);
	})

	test( 'correct value', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0);
	})

	afterEach(() => {
		jest.clearAllMocks();
	})
	afterAll(() => {})
})
