const sellProduct = (products, targetId, amount) => 
  products.map((product) =>
    product.id === targetId ?
    {
      ...product,
      inventory: {
        ...product.inventory,
        quantity: Math.max(0, product.inventory.quantity - amount)
      } 
    } :
    product
  );

const products = [
  {
    id: 101,
    name: "Keyboard",
    inventory: {
      quantity: 12,
      warehouse: "Chicago",
      reorderLevel: 5
    }
  },
  {
    id: 102,
    name: "Mouse",
    price: 24.99,
    inventory: {
      quantity: 8,
      warehouse: "Denver",
      reserved: 2
    }
  },
  {
    id: 103,
    name: "Monitor",
    inventory: {
      quantity: 3,
      warehouse: "Seattle"
    }
  }
];

const targetId = 103;

const amount = 10;

console.log(sellProduct(products, targetId, amount));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(products));

// Normal sale
const result = sellProduct(products, 102, 5);

assert.strictEqual(result[1].inventory.quantity, 3);
console.log("Normal sale test passed!");

// Quantity cannot become negative
const largeSale = sellProduct(products, 103, 10);

assert.strictEqual(largeSale[2].inventory.quantity, 0);
console.log("Minimum quantity test passed!");

// Preserve all other properties
assert.deepStrictEqual(result[1], {
  id: 102,
  name: "Mouse",
  price: 24.99,
  inventory: {
    quantity: 3,
    warehouse: "Denver",
    reserved: 2
  }
});

console.log("Property preservation test passed!");

// Original data remains unchanged
assert.deepStrictEqual(products, original);
console.log("Immutability test passed!");

// Correct object references
assert.notStrictEqual(result, products);
assert.strictEqual(result[0], products[0]);
assert.notStrictEqual(result[1], products[1]);
assert.notStrictEqual(result[1].inventory, products[1].inventory);
assert.strictEqual(result[2], products[2]);

console.log("Object reference test passed!");

// Missing ID
const noMatch = sellProduct(products, 999, 4);

assert.notStrictEqual(noMatch, products);
assert.deepStrictEqual(noMatch, products);
assert.strictEqual(noMatch[0], products[0]);

console.log("Missing ID test passed!");

// Extra properties
const extraProducts = [
  {
    id: 201,
    active: true,
    inventory: {
      quantity: 6,
      location: "Aisle 4",
      reserved: 1
    }
  }
];

assert.deepStrictEqual(sellProduct(extraProducts, 201, 2), [
  {
    id: 201,
    active: true,
    inventory: {
      quantity: 4,
      location: "Aisle 4",
      reserved: 1
    }
  }
]);

console.log("Extra properties test passed!");

