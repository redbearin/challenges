"use strict";

const assert = require("assert").strict;

const increaseRefreshRate = (employees, targetId, increase) => employees.map(employee => 
  employee.id === targetId ?
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
        theme: "light",
        widgets: 5
      }
    }
  },
  {
    id: 102,
    name: "Bob",
    department: "Engineering",
    preferences: {
      language: "Spanish",
      dashboard: {
        refreshRate: 50,
        theme: "dark",
        widgets: 3
      }
    }
  },
  {
    id: 103,
    name: "Charlie",
    preferences: {
      language: "French",
      dashboard: {
        refreshRate: 60,
        theme: "light",
        widgets: 4
      }
    }
  }
];

const targetId = 101;
const increase = 10;

console.log(increaseRefreshRate(employees, targetId, increase));

const original = JSON.parse(JSON.stringify(employees));

// Test 1: Increase capped at 60
const result = increaseRefreshRate(employees, 102, 15);

assert.strictEqual(
  result[1].preferences.dashboard.refreshRate,
  60
);

console.log("Maximum refresh rate test passed!");

// Test 2: Normal increase
const normal = increaseRefreshRate(employees, 101, 10);

assert.strictEqual(
  normal[0].preferences.dashboard.refreshRate,
  30
);

console.log("Normal increase test passed!");

// Test 3: Already at maximum
const maximum = increaseRefreshRate(employees, 103, 10);

assert.strictEqual(
  maximum[2].preferences.dashboard.refreshRate,
  60
);

console.log("Already at maximum test passed!");

// Test 4: Other properties preserved
assert.deepStrictEqual(result[1], {
  id: 102,
  name: "Bob",
  department: "Engineering",
  preferences: {
    language: "Spanish",
    dashboard: {
      refreshRate: 60,
      theme: "dark",
      widgets: 3
    }
  }
});

console.log("Property preservation test passed!");

// Test 5: Original data unchanged
assert.deepStrictEqual(employees, original);

console.log("Immutability test passed!");

// Test 6: New array and matching objects
assert.notStrictEqual(result, employees);
assert.notStrictEqual(result[1], employees[1]);

assert.notStrictEqual(
  result[1].preferences,
  employees[1].preferences
);

assert.notStrictEqual(
  result[1].preferences.dashboard,
  employees[1].preferences.dashboard
);

console.log("New object references test passed!");

// Test 7: Unchanged employees retain references
assert.strictEqual(result[0], employees[0]);
assert.strictEqual(result[2], employees[2]);

console.log("Unchanged references test passed!");

// Test 8: Missing ID
const noMatch = increaseRefreshRate(employees, 999, 10);

assert.notStrictEqual(noMatch, employees);
assert.deepStrictEqual(noMatch, employees);
assert.strictEqual(noMatch[0], employees[0]);
assert.strictEqual(noMatch[1], employees[1]);
assert.strictEqual(noMatch[2], employees[2]);

console.log("Missing ID test passed!");

// Test 9: Unexpected properties preserved
const extraEmployees = [
  {
    id: 201,
    active: true,
    preferences: {
      timezone: "UTC",
      dashboard: {
        refreshRate: 45,
        animations: false
      }
    }
  }
];

assert.deepStrictEqual(
  increaseRefreshRate(extraEmployees, 201, 10),
  [
    {
      id: 201,
      active: true,
      preferences: {
        timezone: "UTC",
        dashboard: {
          refreshRate: 55,
          animations: false
        }
      }
    }
  ]
);

console.log("Extra properties test passed!");