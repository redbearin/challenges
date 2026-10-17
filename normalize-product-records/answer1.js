const normalizeProducts = products => products.map(({ product_id: id, ...rest }) => ({ id, ...rest }));

const products = [
  {
    product_id: 101,
    name: "Keyboard",
    price: 49.99,
    category: "Electronics"
  },
  {
    product_id: 102,
    name: "Notebook",
    price: 4.5,
    inStock: true
  },
  {
    product_id: 103,
    name: "Monitor",
    price: 199,
    category: "Electronics",
    discount: 10
  }
];

console.log(normalizeProducts(products));

const assert = require("assert").strict;

const expected = [
  {
    id: 101,
    name: "Keyboard",
    price: 49.99,
    category: "Electronics"
  },
  {
    id: 102,
    name: "Notebook",
    price: 4.5,
    inStock: true
  },
  {
    id: 103,
    name: "Monitor",
    price: 199,
    category: "Electronics",
    discount: 10
  }
];

assert.deepStrictEqual(normalizeProducts(products), expected);

console.log("Basic test passed!");

//

const original = JSON.parse(JSON.stringify(products));

normalizeProducts(products);

assert.deepStrictEqual(products, original);

console.log("Immutability test passed!");