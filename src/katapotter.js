const BOOKPRICE = 8;

export function getprice(books) {
	if (books.length === 0) {
		return 0;
	}

  if (books.length === 1) {
    return BOOKPRICE;
  }
}