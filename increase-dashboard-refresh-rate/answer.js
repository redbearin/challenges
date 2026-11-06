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

const targetId = 103;
const increase = 10;

document.getElementById('ans').textContent = JSON.stringify(increaseRefreshRate(employees, targetId, increase));