Write a function named updateEmployeeTheme that accepts:

employees — an array of employee objects
targetId — the ID of the employee to update
newTheme — the new dashboard theme

Your function should return a new array with the matching employee's preferences.dashboard.theme updated.
Input
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


Calling:
updateEmployeeTheme(employees, 102, "solarized");


should change Bob's theme to "solarized" while preserving everything else.
Requirements
1. Use a const arrow function with an implicit return.
2. Use .map() and a ternary.
3. Update only the employee whose id matches targetId.
4. Use three object spreads for the matching employee: employee, preferences, and dashboard.
5. Preserve all other properties, including unexpected ones.
6. Do not mutate the original data.
7. Preserve the original object references for nonmatching employees.
8. Return a new array even when no ID matches.
Assume employee IDs are unique and the nested objects always exist.