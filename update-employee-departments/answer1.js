const updateDepartments = employees => employees.map(
  employee => ({...employee, department: "Engineering"})
  );
const employees = [
  {
    id: 101,
    name: "Alice",
    department: "Sales",
    active: true
  },
  {
    id: 102,
    name: "Bob",
    department: "Marketing",
    salary: 65000
  },
  {
    id: 103,
    name: "Charlie",
    department: "Support",
    remote: true
  }
];

console.log(updateDepartments(employees));

const assert = require("assert").strict;

const expected = [
  {
    id: 101,
    name: "Alice",
    department: "Engineering",
    active: true
  },
  {
    id: 102,
    name: "Bob",
    department: "Engineering",
    salary: 65000
  },
  {
    id: 103,
    name: "Charlie",
    department: "Engineering",
    remote: true
  }
];

const original = JSON.parse(JSON.stringify(employees));

const result = updateDepartments(employees);

assert.deepStrictEqual(result, expected);
console.log("Basic test passed!");

assert.deepStrictEqual(employees, original);
console.log("Immutability test passed!");

assert.notStrictEqual(result, employees);
assert.notStrictEqual(result[0], employees[0]);
console.log("New object references test passed!");