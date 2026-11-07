Write a function named increaseRefreshRateIfNeeded that accepts:
- employees: an array of employee objects
- targetId: the employee ID to update
- increase: the amount to increase the refresh rate
Return a new array where the matching employee's preferences.dashboard.refreshRate increases without exceeding 60.

The new requirement: If the matching employee's refresh rate is already 60, return the original employee object rather than creating copies.
Input
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


Expected behavior
increaseRefreshRateIfNeeded(employees, 101, 10);
// Alice's refresh rate becomes 30.

increaseRefreshRateIfNeeded(employees, 102, 10);
// Bob's refresh rate remains 60.
// Bob's original object reference is preserved.

increaseRefreshRateIfNeeded(employees, 103, 20);
// Charlie's refresh rate becomes 60.


Requirements
1. Use a const arrow function with an implicit return.
2. Use .map() and a ternary.
3. Use && to combine the ID match and refresh-rate condition.
4. Use three object spreads for an employee who actually needs updating.
5. Use Math.min() to cap the refresh rate at 60.
6. Preserve all other properties.
7. Do not mutate the original data.
8. Preserve the original employee object references when no update is necessary.
9. Always return a new array, even if no employee changes.
Assume IDs are unique, refresh rates are between 0 and 60, and increase is a positive number.