const normalizeCustomers = customers => JSON.stringify(customers.map(({ customer_name: name, ...rest }) => ({ name, ...rest })));

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

document.getElementById('ans').textContent = normalizeCustomers(customers);