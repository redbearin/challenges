You receive an array of product objects:
const products = [
  { name: "Keyboard", price: 49.99, category: "Electronics" },
  { name: "Coffee", price: 12.5 },
  { name: "Notebook", price: 4, category: "Office" }
];

Write:
const formatProducts = products => {
  // your solution
};

Return an array of strings formatted like this:
[
  "Keyboard - Electronics - $49.99",
  "Coffee - Uncategorized - $12.50",
  "Notebook - Office - $4.00"
]

The exact requirements are:
- Use destructuring somewhere in your solution.
- If category is missing, use "Uncategorized".
- Prices should always have exactly two decimal places.
- Preserve the original product order.
- Do not modify the input objects.
- Assume name is always a string and price is always a valid number.
One additional syntax reference you'll need:
const price = 4;

price.toFixed(2); // "4.00"

toFixed() returns a string, which is fine here because you're building formatted strings anyway.
This isn't intended to be algorithmically difficult. The exercise is primarily about getting comfortable with destructuring + default values while keeping the function clean.