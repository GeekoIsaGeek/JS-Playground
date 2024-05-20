const inventory = new Map();

const products = [
	{ id: 'p1', name: 'Laptop', category: 'Electronics', quantity: 10 },
	{ id: 'p2', name: 'Phone', category: 'Electronics', quantity: 25 },
	{ id: 'p3', name: 'Shoes', category: 'Apparel', quantity: 50 },
	{ id: 'p4', name: 'Jeans', category: 'Apparel', quantity: 30 },
	{ id: 'p5', name: 'Blender', category: 'Home Appliances', quantity: 15 },
];

const addNewProduct = (product) => {
	if (Array.isArray(product)) {
		product.forEach((item) => inventory.set(item.id, item));
	}
	if (product.id) {
		inventory.set(product.id, product);
	}
};

const updateQuantity = (productId, quantity) => {
	if (inventory.has(productId)) {
		inventory.get(productId).quantity = quantity;
	} else {
		console.error(`Product with ID ${productId} not found.`);
	}
};

const categorizeProducts = () => {
	const categorizedProducts = new Map();

	inventory.forEach((product) => {
		if (categorizedProducts.has(product.category)) categorizedProducts.get(product.category).add(product);
		else categorizedProducts.set(product.category, new Set([product]));
	});
	return categorizedProducts;
};

const checkAvailability = (productId) => {
	if (inventory.has(productId)) {
		return inventory.get(productId);
	} else {
		console.error(`Product with ID ${productId} not found.`);
		return null;
	}
};

const removeDiscontinuedProducts = () => {
	inventory.forEach((product) => {
		if (!product.quantity) {
			inventory.delete(product.id);
		}
	});
};

addNewProduct(products);
updateQuantity('p2', 0);

console.log(categorizeProducts(), '\n\n');
console.log(checkAvailability('p2'), '\n\n');

removeDiscontinuedProducts();
console.log(checkAvailability('p2'));
