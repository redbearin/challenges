Given:
const products = [
  {
    name: "Keyboard",
    price: 49.99,
    stock: {
      available: 12,
      warehouse: "Chicago"
    },
    category: "Electronics"
  },
  {
    name: "Notebook",
    price: 4.5,
    stock: {
      available: 30,
      warehouse: "Denver"
    }
  },
  {
    name: "Monitor",
    price: 199,
    stock: {
      available: 0,
      warehouse: "Seattle"
    },
    category: "Electronics"
  }
];


Write:
const formatProducts = products => {
  // Your solution
};


Expected output:
[
  "Keyboard | Electronics | $49.99 | 12 in stock",
  "Notebook | Uncategorized | $4.50 | 30 in stock",
  "Monitor | Electronics | $199.00 | Out of stock"
]


Requirements
1. Use .map() to transform the products into an array of strings.
2. Destructure directly in the .map() callback parameter, not inside the callback body.
3. Extract name and price.
4. Give category a default of "Uncategorized".
5. Extract available from the nested stock object.
6. Format prices with exactly two decimal places using .toFixed(2).
7. When available is 0, display "Out of stock"; otherwise display "<quantity> in stock".
8. Don't modify the original array or its objects.
You can assume every product has name, price, and stock.available; available is always a nonnegative integer. The category property may be missing.
Small hint
A ternary expression is perfectly reasonable for choosing the stock message:
condition ? "message A" : "message B"


You can use an implicit return or a block-bodied callback, whichever makes the result more readable.