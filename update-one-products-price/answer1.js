const updateProductPrice = (products, targetId, newPrice) => 
  products.map(product => 
    product.id === targetId ?
    {...product, price: newPrice} :
    product
  );

const products = [
  {
    id: 101,
    name: "Keyboard",
    price: 49.99,
    category: "Electronics"
  },
  {
    id: 102,
    name: "Mouse",
    price: 24.99,
    inStock: true
  },
  {
    id: 103,
    name: "Monitor",
    price: 199.99,
    discount: 10
  }
];

const targetId = 104;
const newPrice = 49.99;

// output without tests
console.log(updateProductPrice(products, targetId, newPrice));

// test output
const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(products));

const result = updateProductPrice(products, 102, 19.99);

assert.deepStrictEqual(result, [
  {
    id: 101,
    name: "Keyboard",
    price: 49.99,
    category: "Electronics"
  },
  {
    id: 102,
    name: "Mouse",
    price: 19.99,
    inStock: true
  },
  {
    id: 103,
    name: "Monitor",
    price: 199.99,
    discount: 10
  }
]);

console.log("Price update test passed!");

// Original data must remain unchanged
assert.deepStrictEqual(products, original);
console.log("Immutability test passed!");

// Only the matching product should get a new object
assert.notStrictEqual(result, products);
assert.strictEqual(result[0], products[0]);
assert.notStrictEqual(result[1], products[1]);
assert.strictEqual(result[2], products[2]);

console.log("Object reference test passed!");

// A missing ID should leave every product unchanged
const noMatch = updateProductPrice(products, 999, 10);

assert.deepStrictEqual(noMatch, products);
assert.notStrictEqual(noMatch, products);
assert.strictEqual(noMatch[0], products[0]);

console.log("Missing ID test passed!");