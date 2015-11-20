import {getprice} from './katapotter';

describe('Katapotter price', () => {
	it('should be 0 if no items in the basket', () => {
		expect(getprice([])).toBe(0);
	});
});