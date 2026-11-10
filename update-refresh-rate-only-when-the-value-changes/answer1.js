"use strict";

const assert = require("assert").strict;

const increaseRefreshRateIfChanged = (employees, targetId, increase) => employees.map(
  employee => 
    employee.id === targetId && increase > 0 && employee.preferences.dashboard.refreshRate < 60 ?
    {
      ...employee,
      preferences: {
        ...employee.preferences,
        dashboard: {
          ...employee.preferences.dashboard,
          refreshRate: Math.min(60, employee.preferences.dashboard.refreshRate + increase)
        }
      }
    } :
    employee
);


const employees = [
  {
    id: 101,
    name: "Alice",
    preferences: {
      language: "English",
      dashboard: {
        refreshRate: 20,
        theme: "light"
      }
    }
  },
  {
    id: 102,
    name: "Bob",
    preferences: {
      language: "Spanish",
      dashboard: {
        refreshRate: 60,
        theme: "dark"
      }
    }
  },
  {
    id: 103,
    name: "Charlie",
    preferences: {
      language: "French",
      dashboard: {
        refreshRate: 50,
        theme: "light"
      }
    }
  }
];

const targetId = 103;

const increase = 0;

console.log(increaseRefreshRateIfChanged(employees, targetId, increase));

const original = JSON.parse(JSON.stringify(employees));

// Test 1: Normal increase
const normal = increaseRefreshRateIfChanged(employees, 101, 10);

assert.strictEqual(
  normal[0].preferences.dashboard.refreshRate,
  30
);
assert.notStrictEqual(normal[0], employees[0]);

console.log("Normal increase passed!");

// Test 2: Zero increase preserves reference
const zero = increaseRefreshRateIfChanged(employees, 101, 0);

assert.strictEqual(
  zero[0].preferences.dashboard.refreshRate,
  20
);
assert.strictEqual(zero[0], employees[0]);
assert.notStrictEqual(zero, employees);

console.log("Zero increase passed!");

// Test 3: Maximum preserves reference
const maximum = increaseRefreshRateIfChanged(employees, 102, 10);

assert.strictEqual(
  maximum[1].preferences.dashboard.refreshRate,
  60
);
assert.strictEqual(maximum[1], employees[1]);

console.log("Maximum reference test passed!");

// Test 4: Increase capped at 60
const capped = increaseRefreshRateIfChanged(employees, 103, 20);

assert.strictEqual(
  capped[2].preferences.dashboard.refreshRate,
  60
);
assert.notStrictEqual(capped[2], employees[2]);

console.log("Capped increase passed!");

// Test 5: New objects at all three levels
assert.notStrictEqual(normal[0].preferences, employees[0].preferences);
assert.notStrictEqual(
  normal[0].preferences.dashboard,
  employees[0].preferences.dashboard
);

console.log("Nested reference test passed!");

// Test 6: Nonmatching employees preserve references
assert.strictEqual(normal[1], employees[1]);
assert.strictEqual(normal[2], employees[2]);

console.log("Nonmatching references passed!");

// Test 7: Original data unchanged
assert.deepStrictEqual(employees, original);

console.log("Immutability test passed!");

// Test 8: Missing ID
const missing = increaseRefreshRateIfChanged(employees, 999, 10);

assert.notStrictEqual(missing, employees);
assert.strictEqual(missing[0], employees[0]);
assert.strictEqual(missing[1], employees[1]);
assert.strictEqual(missing[2], employees[2]);

console.log("Missing ID test passed!");

// Test 9: Extra properties preserved
const extras = [{
  id: 201,
  active: true,
  preferences: {
    timezone: "UTC",
    dashboard: {
      refreshRate: 45,
      animations: false
    }
  }
}];

assert.deepStrictEqual(
  increaseRefreshRateIfChanged(extras, 201, 10),
  [{
    id: 201,
    active: true,
    preferences: {
      timezone: "UTC",
      dashboard: {
        refreshRate: 55,
        animations: false
      }
    }
  }]
);

console.log("Extra properties passed!");
