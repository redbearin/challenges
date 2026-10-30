Write a function called sellProduct that receives three arguments:
- products: an array of product objects
- targetId: the ID of the product being sold
- amount: the number of units sold
The function should decrease inventory.quantity by amount for the matching product, but never allow the quantity to become negative.
Input
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


Calling:
sellProduct(products, 102, 5);


should return the same products, except the mouse's inventory quantity changes from 8 to 3.

Calling:
sellProduct(products, 103, 10);


should set the monitor's quantity to 0, not -7.
Requirements
1. Use an arrow function with an implicit return.
2. Use .map() and a ternary expression.
3. Update only the product whose id matches targetId.
4. Use object spread to create a new product object and a new nested inventory object.
5. Subtract amount from the existing quantity.
6. Use Math.max() to prevent the quantity from becoming negative.
7. Preserve all other properties, including unexpected ones.
8. Do not mutate the original data.
9. Preserve the original object references for nonmatching products.
10. If no ID matches, return a new array containing the original objects.
Assume IDs are unique, every product has an inventory object, and both amount and the existing quantity are nonnegative numbers.