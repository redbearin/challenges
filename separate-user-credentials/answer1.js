const removePasswords = users => users.map(({password, ...rest}) => rest);

const users = [
  {
    id: 101,
    name: "Maria",
    email: "maria@example.com",
    password: "secret123",
    role: "Admin"
  },
  {
    id: 102,
    name: "David",
    email: "david@example.com",
    password: "hidden456",
    role: "Editor"
  },
  {
    id: 103,
    name: "Sarah",
    email: "sarah@example.com",
    password: "private789",
    role: "Viewer"
  }
];

console.log(removePasswords(users));

const assert = require("assert");

const expected = [
  {
    id: 101,
    name: "Maria",
    email: "maria@example.com",
    role: "Admin"
  },
  {
    id: 102,
    name: "David",
    email: "david@example.com",
    role: "Editor"
  },
  {
    id: 103,
    name: "Sarah",
    email: "sarah@example.com",
    role: "Viewer"
  }
];

assert.deepStrictEqual(removePasswords(users), expected);

console.log("All tests passed!");


