import {_} from 'lodash';

const BOOKPRICE = 8;

export function getprice(books) {
	if (books.length < 2) {
		return BOOKPRICE * books.length;
	}

  if (_.unique(books).length === 1) {
    return BOOKPRICE * books.length;
  }
}