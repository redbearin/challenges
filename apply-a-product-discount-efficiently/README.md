Write a function named applyDiscountIfMatched that accepts:
- products: an array of product objects
- targetId: the ID of the product to update
- discount: a nonnegative dollar amount
The function should subtract the discount from the matching product's pricing.current, without allowing the price to fall below zero.

The new requirement: Check the product ID first. Only calculate the new price for the matching product.
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
Call	Result	Product reference
ID 101, discount 20	80 → 60	New
ID 101, discount 100	80 → 0	New
ID 101, discount 0	80 → 80	Original
ID 102, discount 10	0 → 0	Original
ID 103, discount 50	250 → 200	New
ID 999, discount 20	No match	All original

Requirements
1. Declare the function using const and an arrow function.
2. Use .map() with a block-bodied callback.
3. Use an if statement and an early return when the product ID doesn't match.
4. Calculate const newPrice after the ID check using Math.max().
5. If newPrice equals the original price, return the original product object.
6. Otherwise, create a new product using two object spreads: one for product and one for pricing.
7. Preserve all other properties, including unexpected ones.
8. Do not mutate the original data.
9. Preserve original product references whenever no update is necessary.
10. Always return a new array, even if no product changes.
You can use another if statement or a ternary for the unchanged-price check. Choose whichever you find clearer.

Assume product IDs are unique, prices are nonnegative, and discount is a nonnegative finite number.