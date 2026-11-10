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

document.getElementById('ans').textContent = JSON.stringify(increaseRefreshRateIfChanged(employees, targetId, increase));