import {_} from 'lodash';

const BOOKPRICE = 8;
const DISCOUNTS = [1, 0.95, 0.9, 0.8, 0.75];

export function getprice(books = []) {
	if (!_.isArray(books) || books.length === 0) {
		return 0;
	}
	let l = _.unique(books).length;
	
	let permutations = _.range(2, (l < 3) ? 3 : l, 1).map(_.partial(getPermutations, books));
	let prices = permutations.map(getPermutationPrice);
	return _.min(prices);
	
}

function getPermutations(books = [], limit = 2) {
	let permutations = [[]];
	for (let book of books) {
		let inCart = false;
		for (let p of permutations) {
			if (!_.contains(p, book) && p.length <= limit) {
				inCart = true;
				p.push(book);
				break;
			}
		}
		if (!inCart) {
			permutations.push([book]);
		}
	}
	return permutations;
}

function getPermutationPrice(permutation) {
	return permutation.reduce((price, p) => {
		return price + p.length * BOOKPRICE * DISCOUNTS[p.length - 1];
	}, 0);
}

