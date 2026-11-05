"use strict";

const updateEmployeeTheme = (employees, targetId, newTheme) => employees.map(
  employee =>
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

const newTheme = "dark";

document.getElementById('ans').textContent = JSON.stringify(updateEmployeeTheme(employees, targetId, newTheme));