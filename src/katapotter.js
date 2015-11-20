const BOOKPRICE = 8;

export function getprice(books) {
	if (books.length < 2) {
		return BOOKPRICE * books.length;
	}
}