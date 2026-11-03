"use strict";

const assert = require("assert").strict;

const updateEmployeeTheme = (employees, targetId, newTheme) => employees.map(employee =>
  employee.id === targetId ?
  {
    ...employee,
    preferences: {
      ...employee.preferences,
      dashboard: {
        ...employee.preferences.dashboard,
        theme: newTheme
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
        theme: "light",
        layout: "grid",
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
        theme: "dark",
        layout: "list",
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
        theme: "light",
        layout: "compact",
        widgets: 4
      }
    }
  }
];

const targetId = 102;

const newTheme = "solarized";

console.log(updateEmployeeTheme(employees, targetId, newTheme));

const original = JSON.parse(JSON.stringify(employees));

const result = updateEmployeeTheme(employees, 102, "solarized");

// Test 1: Correct employee updated
assert.strictEqual(
  result[1].preferences.dashboard.theme,
  "solarized"
);

console.log("Theme update test passed!");

// Test 2: Other properties preserved
assert.deepStrictEqual(result[1], {
  id: 102,
  name: "Bob",
  department: "Engineering",
  preferences: {
    language: "Spanish",
    dashboard: {
      theme: "solarized",
      layout: "list",
      widgets: 3
    }
  }
});

console.log("Property preservation test passed!");

// Test 3: Original data unchanged
assert.deepStrictEqual(employees, original);

console.log("Immutability test passed!");

// Test 4: New array and new matching objects
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

// Test 5: Unchanged employees retain their references
assert.strictEqual(result[0], employees[0]);
assert.strictEqual(result[2], employees[2]);

console.log("Unchanged references test passed!");

// Test 6: Missing ID
const noMatch = updateEmployeeTheme(employees, 999, "dark");

assert.notStrictEqual(noMatch, employees);
assert.deepStrictEqual(noMatch, employees);
assert.strictEqual(noMatch[0], employees[0]);
assert.strictEqual(noMatch[1], employees[1]);
assert.strictEqual(noMatch[2], employees[2]);

console.log("Missing ID test passed!");

// Test 7: Unexpected properties preserved
const extraEmployees = [
  {
    id: 201,
    active: true,
    preferences: {
      timezone: "UTC",
      dashboard: {
        theme: "light",
        animations: false
      }
    }
  }
];

assert.deepStrictEqual(
  updateEmployeeTheme(extraEmployees, 201, "dark"),
  [
    {
      id: 201,
      active: true,
      preferences: {
        timezone: "UTC",
        dashboard: {
          theme: "dark",
          animations: false
        }
      }
    }
  ]
);

console.log("Extra properties test passed!");