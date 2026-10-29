Write a function called restockProduct that receives three arguments:
- products: an array of product objects
- targetId: the ID of the product to restock
- amount: the number of units to add
The function should increase inventory.quantity by amount only for the matching product.
Input
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


Calling:
restockProduct(products, 102, 7);


should return:
[
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
      quantity: 22,
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
]


Notice that the mouse's quantity changes from 15 to 22, because we're adding 7, not replacing the quantity with 7.
Requirements
1. Use an arrow function with an implicit return.
2. Use .map() and a ternary expression.
3. Update only the product whose id matches targetId.
4. Use object spread at both levels: the product and its inventory.
5. Increase inventory.quantity by amount.
6. Preserve all other properties, including unexpected ones.
7. Do not mutate the original data.
8. Return the original object references for nonmatching products.
9. If no ID matches, return a new array containing the original objects.
You can assume IDs are unique, every product has an inventory object, and amount is a nonnegative number.