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
});