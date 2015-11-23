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

});