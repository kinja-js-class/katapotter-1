import {_} from 'lodash';

const BOOKPRICE = 8;
const DISCOUNTS = [1, 0.95, 0.9, 0.8, 0.75];

export function getprice(books) {
	let uniqueBooksNum = _.unique(books).length;
	if (books.length < 2) {
		return BOOKPRICE * books.length;
	}

	return BOOKPRICE * books.length * DISCOUNTS[uniqueBooksNum - 1];
}