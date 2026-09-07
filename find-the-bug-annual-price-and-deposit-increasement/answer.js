migrateProduct = oldProduct => {
  oldProduct.containers = [...oldProduct.containers];
	const newProduct = {...oldProduct};
	newProduct.price *= 1.15;
	newProduct.containers = [...newProduct.containers.map((container => {
		if (container.type === 'bottle') {
			container.deposit = 0.20;
		}
		return container;
	}))];
	return JSON.stringify({oldProduct, newProduct});
}

const oldProduct = {
  product: "Milk",
  price: 1.2,
  containers: [
    { type: "bottle", deposit: 0.15, liters: 1.5 },
    { type: "can", deposit: 0.1, liters: 0.33 },
    { type: "carton", deposit: null, liters: 1 }
  ]
};

document.getElementById('ans').textContent = migrateProduct(oldProduct);