function addProduct(index, produto, quantidade) {
	return {
		type: 'ADD_PRODUCT',
		index,
		produto,
		quantidade
	};
}

function removeProduct(index, produto, quantidade) {
	return {
		type: 'REMOVE_PRODUCT',
		index,
		produto,
		quantidade
	};
}

function cleanProducts() {
	return {
		type: 'CLEAN_PRODUCTS'
	};
}

export { addProduct, removeProduct, cleanProducts };
