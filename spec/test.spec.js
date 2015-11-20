import {getprice} from './katapotter';

describe('Katapotter price', () => {

	it('should be 0 if no items in the basket', () => {
		expect(getprice([])).toBe(0);
	});

	it('should be the same as the price of the item in the basket', () => {
		expect(getprice([3])).toBe(8);
	});

});