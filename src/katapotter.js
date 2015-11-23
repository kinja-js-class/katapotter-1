import {_} from 'lodash';

const BOOKPRICE = 8;
const DISCOUNTS = [1, 0.95, 0.9, 0.8, 0.75];

export function getprice(books) {
	let uniqueBooksNum = _.unique(books).length;
	if (books.length < 2) {
		return BOOKPRICE * books.length;
	}

	let permutations = [[]];
	for (let book of books) {
		let inCart = false;
		for (let p of permutations) {
			if (!_.contains(p, book) && p.length < 5) {
				inCart = true;
				p.push(book);
				break;
			}
		}
		if (!inCart) {
			permutations.push([book]);
		}
	}

	let price = permutations.reduce((price, p) => {
		return price + p.length * BOOKPRICE * DISCOUNTS[p.length - 1];
	}, 0);

	return price;
}
