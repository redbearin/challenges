updateProductStock = (product, newQty) => JSON.stringify({
  ...product,
  inventory: {
    ...product.inventory,
    quantity: newQty
  }
});

const product = {
  id: 301,
  name: "Wireless Mouse",
  price: 29.99,
  inventory: {
    quantity: 15,
    warehouse: "Chicago",
    reorderLevel: 5
  }
};

const newQty = 40;

document.getElementById('ans').textContent = updateProductStock(product, newQty);