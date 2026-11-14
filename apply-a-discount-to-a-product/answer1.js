"use strict";

const assert = require("assert").strict;

const applyProductDiscount = (products, targetId, discount) => {
  return products.map(product => 
    {
      const newPrice = Math.max(product.pricing.current - discount, 0);

      return  product.id === targetId && newPrice < product.pricing.current ?
        {
          ...product,
          pricing: {
            ...product.pricing,
            current: newPrice
          }
        } :
        product;
    }
  );
};

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

const discount = 0;

console.log(applyProductDiscount(products, targetId, discount));

// Place the products array and your function here.

const original = JSON.parse(JSON.stringify(products));

// Normal discount
const normal = applyProductDiscount(products, 101, 20);

assert.strictEqual(normal[0].pricing.current, 60);
assert.notStrictEqual(normal[0], products[0]);
assert.notStrictEqual(normal[0].pricing, products[0].pricing);
assert.strictEqual(normal[1], products[1]);
assert.strictEqual(normal[2], products[2]);

console.log("Normal discount passed!");

// Discount cannot produce a negative price
const capped = applyProductDiscount(products, 101, 100);

assert.strictEqual(capped[0].pricing.current, 0);

console.log("Minimum price passed!");

// Zero discount preserves reference
const zero = applyProductDiscount(products, 101, 0);

assert.strictEqual(zero[0], products[0]);
assert.notStrictEqual(zero, products);

console.log("Zero discount passed!");

// Already at zero preserves reference
const alreadyZero = applyProductDiscount(products, 102, 10);

assert.strictEqual(alreadyZero[1], products[1]);

console.log("Already at zero passed!");

// Another product
const monitor = applyProductDiscount(products, 103, 50);

assert.strictEqual(monitor[2].pricing.current, 200);
assert.strictEqual(monitor[2].category, "Electronics");

console.log("Different product passed!");

// Original data remains unchanged
assert.deepStrictEqual(products, original);

console.log("Immutability passed!");

// Missing ID
const missing = applyProductDiscount(products, 999, 20);

assert.notStrictEqual(missing, products);
assert.strictEqual(missing[0], products[0]);
assert.strictEqual(missing[1], products[1]);
assert.strictEqual(missing[2], products[2]);

console.log("Missing ID passed!");

// All properties preserved
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

// Unexpected properties preserved
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
  applyProductDiscount(extras, 201, 15),
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