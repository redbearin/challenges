Write a function named increaseRefreshRateIfChanged that accepts:
- employees: an array of employee objects
- targetId: the ID of the employee to update
- increase: a nonnegative number, including zero
Return a new array with the matching employee's preferences.dashboard.refreshRate increased, capped at 60.

Important: If the calculated refresh rate is the same as the original, preserve the original employee object reference.
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
Call	Result	Object reference
ID 101, increase 10	20 → 30	New
ID 101, increase 0	20 → 20	Original
ID 102, increase 10	60 → 60	Original
ID 103, increase 20	50 → 60	New
ID 999, increase 10	No match	All original

Requirements
1. Use a const arrow function with an implicit return.
2. Use .map() and a ternary.
3. Use && to combine the ID match with a check that the calculated refresh rate differs from the current rate.
4. Use Math.min(60, ...) to cap the result.
5. Use three object spreads when an update is necessary.
6. Preserve all other properties.
7. Do not mutate the original data.
8. Preserve original employee references whenever no value changes.
9. Always return a new array, even when no employee changes.
Assume IDs are unique, refresh rates are between 0 and 60, and increase is a nonnegative finite number.