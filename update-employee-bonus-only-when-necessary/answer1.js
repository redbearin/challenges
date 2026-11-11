"use strict";

const assert = require("assert").strict;

const increaseEmployeeBonus = (employees, targetId, increase) => employees.map(employee => 
  employee.id === targetId && increase > 0 &&
  employee.compensation.bonus.maximum > employee.compensation.bonus.amount?
  {
    ...employee,
    compensation: {
      ...employee.compensation,
      bonus: {
        ...employee.compensation.bonus,
        amount: Math.min(employee.compensation.bonus.maximum, employee.compensation.bonus.amount + increase)
      }
    }
  }:
  employee
);

const employees = [
  {
    id: 101,
    name: "Alice",
    compensation: {
      currency: "USD",
      bonus: {
        amount: 300,
        maximum: 500,
        eligible: true
      }
    }
  },
  {
    id: 102,
    name: "Bob",
    department: "Engineering",
    compensation: {
      currency: "USD",
      bonus: {
        amount: 500,
        maximum: 500,
        eligible: true
      }
    }
  },
  {
    id: 103,
    name: "Charlie",
    compensation: {
      currency: "EUR",
      bonus: {
        amount: 150,
        maximum: 400,
        eligible: false
      }
    }
  }
];

const targetId = 101;

const increase = 100;

console.log(increaseEmployeeBonus(employees, targetId, increase));

// Place the employees array and your function here.

const original = JSON.parse(JSON.stringify(employees));

// Test 1: Normal increase
const normal = increaseEmployeeBonus(employees, 101, 100);

assert.strictEqual(normal[0].compensation.bonus.amount, 400);
assert.notStrictEqual(normal[0], employees[0]);

console.log("Normal increase passed!");

// Test 2: Maximum cap
const capped = increaseEmployeeBonus(employees, 101, 300);

assert.strictEqual(capped[0].compensation.bonus.amount, 500);

console.log("Maximum cap passed!");

// Test 3: Zero increase preserves reference
const zero = increaseEmployeeBonus(employees, 101, 0);

assert.strictEqual(zero[0], employees[0]);
assert.notStrictEqual(zero, employees);

console.log("Zero increase passed!");

// Test 4: Already at maximum preserves reference
const maximum = increaseEmployeeBonus(employees, 102, 100);

assert.strictEqual(maximum[1], employees[1]);

console.log("Already at maximum passed!");

// Test 5: Different employee maximum
const charlie = increaseEmployeeBonus(employees, 103, 300);

assert.strictEqual(charlie[2].compensation.bonus.amount, 400);
assert.strictEqual(charlie[2].compensation.bonus.eligible, false);

console.log("Individual maximum passed!");

// Test 6: New references along updated path
assert.notStrictEqual(normal[0].compensation, employees[0].compensation);
assert.notStrictEqual(
  normal[0].compensation.bonus,
  employees[0].compensation.bonus
);

console.log("Updated references passed!");

// Test 7: Unchanged employees retain references
assert.strictEqual(normal[1], employees[1]);
assert.strictEqual(normal[2], employees[2]);

console.log("Unchanged references passed!");

// Test 8: Original data unchanged
assert.deepStrictEqual(employees, original);

console.log("Immutability passed!");

// Test 9: Missing ID
const missing = increaseEmployeeBonus(employees, 999, 100);

assert.notStrictEqual(missing, employees);
assert.strictEqual(missing[0], employees[0]);
assert.strictEqual(missing[1], employees[1]);
assert.strictEqual(missing[2], employees[2]);

console.log("Missing ID passed!");

// Test 10: Other properties preserved
assert.deepStrictEqual(normal[0], {
  id: 101,
  name: "Alice",
  compensation: {
    currency: "USD",
    bonus: {
      amount: 400,
      maximum: 500,
      eligible: true
    }
  }
});

console.log("Property preservation passed!");

// Test 11: Unexpected properties preserved
const extras = [{
  id: 201,
  active: true,
  compensation: {
    payPeriod: "monthly",
    bonus: {
      amount: 80,
      maximum: 150,
      category: "performance"
    }
  }
}];

assert.deepStrictEqual(
  increaseEmployeeBonus(extras, 201, 30),
  [{
    id: 201,
    active: true,
    compensation: {
      payPeriod: "monthly",
      bonus: {
        amount: 110,
        maximum: 150,
        category: "performance"
      }
    }
  }]
);

console.log("Unexpected properties passed!");