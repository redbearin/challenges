Write a function called increaseRefreshRate that accepts:
- employees: an array of employee objects
- targetId: the ID of the employee to update
- increase: the amount to increase the refresh rate
Return a new array where the matching employee's preferences.dashboard.refreshRate is increased, but never exceeds 60.

Input
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


Calling:
increaseRefreshRate(employees, 102, 15);


should increase Bob's refresh rate from 50 to 60, not 65.

Calling:
increaseRefreshRate(employees, 101, 10);


should increase Alice's refresh rate from 20 to 30.
Requirements
1. Use a const arrow function with an implicit return.
2. Use .map() and a ternary.
3. Update only the employee whose id matches targetId.
4. Use three object spreads for employee, preferences, and dashboard.
5. Calculate the new refresh rate using Math.min().
6. Preserve all other properties, including unexpected ones.
7. Do not mutate the original data.
8. Preserve original object references for nonmatching employees.
9. Return a new array even when no ID matches.
Assume IDs are unique, refresh rates are between 0 and 60, and increase is nonnegative.