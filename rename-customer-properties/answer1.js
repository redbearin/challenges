const normalizeCustomers = customers => customers.map(({ customer_name: name, ...rest }) => ({ name, ...rest }));

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

console.log(normalizeCustomers(customers));

const assert = require("assert").strict;

const expected = [
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
];

assert.deepStrictEqual(normalizeCustomers(customers), expected);
console.log("Basic test passed!");

// Check that unexpected properties are preserved
const extraCustomers = [
  {
    customer_name: "Diana",
    department: "Sales",
    subscribed: false
  }
];

assert.deepStrictEqual(normalizeCustomers(extraCustomers), [
  {
    name: "Diana",
    department: "Sales",
    subscribed: false
  }
]);

console.log("Extra properties test passed!");

// Check that the input remains unchanged
const original = JSON.parse(JSON.stringify(customers));

normalizeCustomers(customers);

assert.deepStrictEqual(customers, original);
console.log("Immutability test passed!");

