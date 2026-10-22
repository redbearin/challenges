updateProductStock = (product, newQty) => ({
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

console.log(updateProductStock(product, newQty));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(product));

const result = updateProductStock(product, 40);

assert.deepStrictEqual(result, {
  id: 301,
  name: "Wireless Mouse",
  price: 29.99,
  inventory: {
    quantity: 40,
    warehouse: "Chicago",
    reorderLevel: 5
  }
});

console.log("Stock update test passed!");

assert.deepStrictEqual(product, original);
console.log("Immutability test passed!");

assert.notStrictEqual(result, product);
assert.notStrictEqual(result.inventory, product.inventory);
console.log("New object references test passed!");

const extraProduct = {
  name: "Keyboard",
  category: "Electronics",
  inventory: {
    quantity: 8,
    location: "Aisle 4",
    reserved: 2
  }
};

assert.deepStrictEqual(updateProductStock(extraProduct, 25), {
  name: "Keyboard",
  category: "Electronics",
  inventory: {
    quantity: 25,
    location: "Aisle 4",
    reserved: 2
  }
});

console.log("Extra properties test passed!");