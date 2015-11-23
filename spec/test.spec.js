import {getprice, getitemsum} from '../src/katapotter';
import {BOOKPRICE, DISCOUNTS} from '../src/consts'

describe('Katapotter price', () => {

	it('should be 0 if no items in the basket', () => {
		expect(getprice([])).toBe(0);
	});

	it('should be the same as the price of the item in the basket', () => {
		expect(getprice([3])).toBe(BOOKPRICE);
	});

	it('should get proper discounts if less than 5 different books are in the basket', () => {
		let bookset1 = [1, 2];
		expect(getprice(bookset1)).toBe(bookset1.length * BOOKPRICE * DISCOUNTS[bookset1.length - 1]);
		
		let bookset2 = [1, 2, 1];
		expect(getprice(bookset2)).not.toBe(bookset2.length * BOOKPRICE * DISCOUNTS[bookset2.length - 1]);
	});


	// misc test for the getitemsum ~private~ method
	it('should get the sum of added items in the basket', () => {
		let testcases = [
			{source: [5, 2, 1, 1, 3, 2, 2, 3], expectation: [2, 3, 2, 0, 1]},
			{source: [2, 1, 1, 3, 2, 2, 3], expectation: [2, 3, 2, 0, 0]},
			{source: [4, 4, 4], expectation: [0, 0, 0, 3, 0]}
		];
		testcases.forEach((testcase) => expect(getitemsum(testcase.source)).toEqual(testcase.expectation));
	})

});