// destructuring, default parameters, arrow functions, bónusz: iterátor spreaddel
import countBy from 'lodash.countby'
import arrayfrom from 'array.from'
import {BOOKPRICE, DISCOUNTS} from './consts'

// no need to export this really, just left here so it can be tested
export function getitemsum(items = []) {

	let itemsums = countBy(items);
	// note #1: Array.from was polyfilled :-/
	// note #2: lodash countBy generates a string key no matter what, that's the reason for the string conversion
	return Array.from(new Array(5), (v, index) => (itemsums['' + (index + 1)] || 0));

	/*
	// without Array.from:
	return (Array.apply(null, Array(5))).map((value, index) => {
		return itemsums[('' + (index + 1))] || 0;
	});
	*/
}


export function getprice(books = []) {
	let booksum = getitemsum(books),
		totalBooks = booksum.reduce((prevVal, currVal) => prevVal + currVal, 0);

	// case #1: zero or one book, returning a non-discounted price
	if (books.length < 2) {
		return BOOKPRICE * books.length;
	}

	// case #2: maximum 5 books in the basket, each one different, returning discounted price
	if (totalBooks <= 5 && Math.max(...booksum) < 2) {
		return books.length * BOOKPRICE * DISCOUNTS[books.length - 1]
	}
}