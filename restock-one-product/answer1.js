restockProduct = (products, targetId, amount) => 
  products.map((product) =>
    product.id === targetId ?
    {
      ...product,
      inventory: {
        ...product.inventory,
        quantity: product.inventory.quantity + amount 
      }
    } : 
    product
  );

const products = [
  {
    id: 101,
    name: "Keyboard",
    inventory: {
      quantity: 10,
      warehouse: "Chicago",
      reorderLevel: 5
    }
  },
  {
    id: 102,
    name: "Mouse",
    price: 24.99,
    inventory: {
      quantity: 15,
      warehouse: "Denver",
      reserved: 3
    }
  },
  {
    id: 103,
    name: "Monitor",
    inventory: {
      quantity: 8,
      warehouse: "Seattle"
    }
  }
];

const targetId = 102;

const amount = 7;

console.log(restockProduct(products, targetId, amount));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(products));

const result = restockProduct(products, 102, 7);

assert.deepStrictEqual(result, [
  products[0],
  {
    id: 102,
    name: "Mouse",
    price: 24.99,
    inventory: {
      quantity: 22,
      warehouse: "Denver",
      reserved: 3
    }
  },
  products[2]
]);

console.log("Restock test passed!");

// Check immutability
assert.deepStrictEqual(products, original);
console.log("Immutability test passed!");

// Check object references
assert.notStrictEqual(result, products);
assert.strictEqual(result[0], products[0]);
assert.notStrictEqual(result[1], products[1]);
assert.notStrictEqual(result[1].inventory, products[1].inventory);
assert.strictEqual(result[2], products[2]);

console.log("Object reference test passed!");

// Check missing ID
const noMatch = restockProduct(products, 999, 5);

assert.notStrictEqual(noMatch, products);
assert.deepStrictEqual(noMatch, products);
assert.strictEqual(noMatch[0], products[0]);

console.log("Missing ID test passed!");

// Check that the amount is added, not substituted
assert.strictEqual(
  restockProduct(products, 101, 4)[0].inventory.quantity,
  14
);

console.log("Quantity calculation test passed!");

// Check unexpected properties
const extraProducts = [
  {
    id: 201,
    active: true,
    inventory: {
      quantity: 3,
      location: "Aisle 4",
      reserved: 1
    }
  }
];

assert.deepStrictEqual(
  restockProduct(extraProducts, 201, 6),
  [
    {
      id: 201,
      active: true,
      inventory: {
        quantity: 9,
        location: "Aisle 4",
        reserved: 1
      }
    }
  ]
);

console.log("Extra properties test passed!");