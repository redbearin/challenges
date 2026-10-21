Write a function named updateProductPrice that receives:
- products: an array of product objects
- targetId: the ID of the product to update
- newPrice: the replacement price
The function should update only the matching product.

Input
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

Calling:
updateProductPrice(products, 102, 19.99);


should produce:
[
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
]

Requirements
1. Use .map() to create a new array.
2. Use a ternary expression inside the callback.
3. If a product's id matches targetId, return a new object with the updated price.
4. Otherwise, return the original product object unchanged.
5. Preserve all other properties, including unexpected ones.
6. Don't mutate the input array or any original product objects.
7. If no product matches, return a new array containing the original object references.
You can assume product IDs are unique.

