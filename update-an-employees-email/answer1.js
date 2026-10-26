const updateEmployeeEmail = (employees, empId, newEmail) => 
  employees.map((employee) => 
    employee.id === empId ?
    {
      ...employee,
      contact: {
        ...employee.contact,
        email: newEmail
      }
    } :
    employee
  );


const employees = [
  {
    id: 101,
    name: "Alice",
    contact: {
      email: "alice@company.com",
      phone: "555-0101"
    }
  },
  {
    id: 102,
    name: "Bob",
    department: "Sales",
    contact: {
      email: "bob@company.com",
      phone: "555-0102"
    }
  },
  {
    id: 103,
    name: "Charlie",
    contact: {
      email: "charlie@company.com",
      phone: "555-0103"
    }
  }
];

const empId = 102;
const newEmail = "bob.new@company.com";

console.log(updateEmployeeEmail(employees, empId, newEmail));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(employees));

const result = updateEmployeeEmail(
  employees,
  102,
  "bob.new@company.com"
);

assert.deepStrictEqual(result, [
  employees[0],
  {
    id: 102,
    name: "Bob",
    department: "Sales",
    contact: {
      email: "bob.new@company.com",
      phone: "555-0102"
    }
  },
  employees[2]
]);

console.log("Email update test passed!");

// Original data remains unchanged
assert.deepStrictEqual(employees, original);
console.log("Immutability test passed!");

// Only the matching employee gets new objects
assert.notStrictEqual(result, employees);
assert.strictEqual(result[0], employees[0]);
assert.notStrictEqual(result[1], employees[1]);
assert.notStrictEqual(result[1].contact, employees[1].contact);
assert.strictEqual(result[2], employees[2]);

console.log("Object reference test passed!");

// Missing ID
const noMatch = updateEmployeeEmail(
  employees,
  999,
  "nobody@company.com"
);

assert.notStrictEqual(noMatch, employees);
assert.deepStrictEqual(noMatch, employees);
assert.strictEqual(noMatch[0], employees[0]);

console.log("Missing ID test passed!");

// Preserve unexpected properties
const extraEmployees = [
  {
    id: 201,
    active: true,
    contact: {
      email: "old@example.com",
      extension: 42
    }
  }
];

assert.deepStrictEqual(
  updateEmployeeEmail(extraEmployees, 201, "new@example.com"),
  [
    {
      id: 201,
      active: true,
      contact: {
        email: "new@example.com",
        extension: 42
      }
    }
  ]
);

console.log("Extra properties test passed!");