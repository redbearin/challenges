Calculated value in two places: to decide whether an update is needed and to assign the updated price.

Write a function called applyProductDiscount that accepts:
- products: an array of product objects
- targetId: the product to update
- discount: a nonnegative dollar amount
The function should subtract the discount from the matching product's pricing.current, without allowing the price to fall below zero.

Only create a new product object when the calculated price differs from the original.
Input
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


Expected behavior
Call	New price	Product reference
ID 101, discount 20	60	New
ID 101, discount 100	0	New
ID 101, discount 0	80	Original
ID 102, discount 10	0	Original
ID 103, discount 50	200	New
ID 999, discount 20	No change	All original

Requirements
1. Declare the function using const and an arrow function.
2. Use .map() with a block-bodied callback.
3. Declare a local const newPrice inside the callback.
4. Calculate newPrice using Math.max(0, ...).
5. Use newPrice in both the ternary condition and the updated pricing.current property.
6. Use && to check the matching ID and whether the price actually changes.
7. Use two object spreads: one for the product and one for pricing.
8. Preserve all unrelated properties and the original data.
9. Preserve object references when no update is necessary.
10. Always return a new array.
Assume product IDs are unique, prices are nonnegative, and discount is a nonnegative finite number.