"use strict";

const assert = require("assert").strict;

const increaseRefreshRateIfNeeded = (employees, targetId, increase) => employees.map(employee => 
  employee.id === targetId && employee.preferences.dashboard.refreshRate < 60 ?
  {
    ...employee,
    preferences: {
      ...employee.preferences,
      dashboard: {
        ...employee.preferences.dashboard,
        refreshRate: Math.min(60, employee.preferences.dashboard.refreshRate + increase )
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

const targetId = 101;
const increase = 10;

console.log(increaseRefreshRateIfNeeded(employees, targetId, increase));

const original = JSON.parse(JSON.stringify(employees));

// Test 1: Normal increase
const normal = increaseRefreshRateIfNeeded(employees, 101, 10);

assert.strictEqual(
  normal[0].preferences.dashboard.refreshRate,
  30
);

console.log("Normal increase test passed!");

// Test 2: Maximum limit
const capped = increaseRefreshRateIfNeeded(employees, 103, 20);

assert.strictEqual(
  capped[2].preferences.dashboard.refreshRate,
  60
);

console.log("Maximum limit test passed!");

// Test 3: Already at maximum
const unchanged = increaseRefreshRateIfNeeded(employees, 102, 10);

assert.strictEqual(
  unchanged[1].preferences.dashboard.refreshRate,
  60
);

assert.strictEqual(
  unchanged[1],
  employees[1]
);

console.log("Unchanged object reference test passed!");

// Test 4: Updated objects have new references
assert.notStrictEqual(normal, employees);
assert.notStrictEqual(normal[0], employees[0]);

assert.notStrictEqual(
  normal[0].preferences,
  employees[0].preferences
);

assert.notStrictEqual(
  normal[0].preferences.dashboard,
  employees[0].preferences.dashboard
);

console.log("Updated object references test passed!");

// Test 5: Other employees retain references
assert.strictEqual(normal[1], employees[1]);
assert.strictEqual(normal[2], employees[2]);

console.log("Other employee references test passed!");

// Test 6: Original data unchanged
assert.deepStrictEqual(employees, original);

console.log("Immutability test passed!");

// Test 7: Missing ID
const noMatch = increaseRefreshRateIfNeeded(employees, 999, 10);

assert.notStrictEqual(noMatch, employees);

assert.strictEqual(noMatch[0], employees[0]);
assert.strictEqual(noMatch[1], employees[1]);
assert.strictEqual(noMatch[2], employees[2]);

console.log("Missing ID test passed!");

// Test 8: Other properties preserved
assert.deepStrictEqual(normal[0], {
  id: 101,
  name: "Alice",
  preferences: {
    language: "English",
    dashboard: {
      refreshRate: 30,
      theme: "light"
    }
  }
});

console.log("Property preservation test passed!");