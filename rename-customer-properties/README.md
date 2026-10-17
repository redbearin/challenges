You receive customer records from an API that uses customer_name. Your application prefers the simpler property name name.
Write a function called normalizeCustomers that renames this property while preserving everything else.

Input
const customers = [
  {
    customer_name: "Alice",
    email: "alice@example.com",
    active: true
  },
  {
    customer_name: "Bob",
    email: "bob@example.com",
    loyaltyPoints: 150
  },
  {
    customer_name: "Charlie",
    city: "Denver",
    vip: true
  }
];


Expected output
[
  {
    name: "Alice",
    email: "alice@example.com",
    active: true
  },
  {
    name: "Bob",
    email: "bob@example.com",
    loyaltyPoints: 150
  },
  {
    name: "Charlie",
    city: "Denver",
    vip: true
  }
]


Requirements
1. Use .map() to create a new array.
2. Destructure customer_name directly in the .map() callback parameter.
3. Use object rest syntax to collect all remaining properties.
4. Use object spread syntax to build each new object.
5. Rename customer_name to name in the output.
6. Preserve all other properties, including unexpected additional properties.
7. Don't mutate the original objects.
You may choose your own local variable names. The output property must be called name.