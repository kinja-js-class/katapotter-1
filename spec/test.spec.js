import {getprice} from '../src/katapotter';

describe('Katapotter price', () => {

	it('should be 0 if no items in the basket', () => {
		expect(getprice([])).toBe(0);
	});

	it('should be 8 on 1 item', () => {
		expect(getprice([3])).toBe(8);
	});

	it('should be 16 on the 2 same items', () => {
		expect(getprice([3, 3])).toBe(16);
	});

	it('should be 24 for the same 3 items', () => {
		expect(getprice([3, 3, 3])).toBe(24);
	});

	it('should be 15.2 for 2 different items', () => {
		expect(getprice([2, 3])).toBe(15.2);
	});

	it('should be 21.6 for 3 different items', () => {
		expect(getprice([2, 3, 4])).toBe(21.6);
	});

	it('should be 15.2 + 8 for 2 different with one equal', () => {
		expect(getprice([2, 2, 3])).toBe(15.2 + 8);
	});

	it('should be 3 * 8 * 0.9 + 8 for 2 different with one equal', () => {
		expect(getprice([2, 2, 3, 4])).toBe(3 * 8 * 0.9 + 8);
	});

	it('should be 4 * 8 * 0.8 for 4 different', () => {
		expect(getprice([1, 2, 3, 4])).toBe(4 * 8 * 0.8);
	});

	it('should be 5 * 8 * 0.75 for 5 different', () => {
		expect(getprice([1, 2, 3, 4, 5])).toBe(5 * 8 * 0.75);
	});
	
	it('should be 51.2 for the test case in katapotter desc', () => {
		expect(getprice([1, 1, 2, 2, 3, 3, 4, 5])).toBe(51.2);
	});
});