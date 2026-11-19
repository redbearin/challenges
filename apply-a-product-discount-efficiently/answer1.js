"use strict";

const assert = require("assert").strict;

const applyDiscountIfMatched = (products, targetId, discount) => products.map(
  product => {
    if (product.id !== targetId) {
      return product;
    }
    
    const newPrice = Math.max(0, product.pricing.current - discount);
    
    return product.id === targetId && newPrice < product.pricing.current ?
    {
      ...product,
      pricing: {
        ...product.pricing,
        current: newPrice
      }
    } :
    product
  } 
);

const products = [
  {
    id: 101,
    name: "Keyboard",
    pricing: {
      current: 80,
      original: 100,
      currency: "USD"
    }
  },
  {
    id: 102,
    name: "Mouse",
    pricing: {
      current: 0,
      original: 30,
      currency: "USD"
    }
  },
  {
    id: 103,
    name: "Monitor",
    category: "Electronics",
    pricing: {
      current: 250,
      original: 300,
      currency: "USD"
    }
  }
];

const targetId = 101;

const discount = 20;

console.log(applyDiscountIfMatched(products, targetId, discount));

const original = JSON.parse(JSON.stringify(products));

// Test 1: Normal discount
const normal = applyDiscountIfMatched(products, 101, 20);

assert.strictEqual(normal[0].pricing.current, 60);
assert.notStrictEqual(normal[0], products[0]);
assert.notStrictEqual(normal[0].pricing, products[0].pricing);

console.log("Normal discount passed!");

// Test 2: Minimum price
const capped = applyDiscountIfMatched(products, 101, 100);

assert.strictEqual(capped[0].pricing.current, 0);

console.log("Minimum price passed!");

// Test 3: Zero discount preserves reference
const zero = applyDiscountIfMatched(products, 101, 0);

assert.strictEqual(zero[0], products[0]);
assert.notStrictEqual(zero, products);

console.log("Zero discount passed!");

// Test 4: Already at zero preserves reference
const alreadyZero = applyDiscountIfMatched(products, 102, 10);

assert.strictEqual(alreadyZero[1], products[1]);

console.log("Already at zero passed!");

// Test 5: Another product
const monitor = applyDiscountIfMatched(products, 103, 50);

assert.strictEqual(monitor[2].pricing.current, 200);
assert.strictEqual(monitor[2].category, "Electronics");

console.log("Different product passed!");

// Test 6: Nonmatching products retain references
assert.strictEqual(normal[1], products[1]);
assert.strictEqual(normal[2], products[2]);

console.log("Nonmatching references passed!");

// Test 7: Original data remains unchanged
assert.deepStrictEqual(products, original);

console.log("Immutability passed!");

// Test 8: Missing ID
const missing = applyDiscountIfMatched(products, 999, 20);

assert.notStrictEqual(missing, products);
assert.strictEqual(missing[0], products[0]);
assert.strictEqual(missing[1], products[1]);
assert.strictEqual(missing[2], products[2]);

console.log("Missing ID passed!");

// Test 9: All properties preserved
assert.deepStrictEqual(normal[0], {
  id: 101,
  name: "Keyboard",
  pricing: {
    current: 60,
    original: 100,
    currency: "USD"
  }
});

console.log("Property preservation passed!");

// Test 10: Unexpected properties preserved
const extras = [{
  id: 201,
  active: true,
  pricing: {
    current: 75,
    original: 90,
    taxCode: "A1"
  }
}];

assert.deepStrictEqual(
  applyDiscountIfMatched(extras, 201, 15),
  [{
    id: 201,
    active: true,
    pricing: {
      current: 60,
      original: 90,
      taxCode: "A1"
    }
  }]
);

console.log("Unexpected properties passed!");
