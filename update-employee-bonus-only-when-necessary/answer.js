const increaseEmployeeBonus = (employees, targetId, increase) => employees.map(employee => 
  employee.id === targetId && increase > 0 &&
  employee.compensation.bonus.maximum > employee.compensation.bonus.amount?
  {
    ...employee,
    compensation: {
      ...employee.compensation,
      bonus: {
        ...employee.compensation.bonus,
        amount: Math.min(employee.compensation.bonus.maximum, employee.compensation.bonus.amount + increase)
      }
    }
  }:
  employee
);

const employees = [
  {
    id: 101,
    name: "Alice",
    compensation: {
      currency: "USD",
      bonus: {
        amount: 300,
        maximum: 500,
        eligible: true
      }
    }
  },
  {
    id: 102,
    name: "Bob",
    department: "Engineering",
    compensation: {
      currency: "USD",
      bonus: {
        amount: 500,
        maximum: 500,
        eligible: true
      }
    }
  },
  {
    id: 103,
    name: "Charlie",
    compensation: {
      currency: "EUR",
      bonus: {
        amount: 150,
        maximum: 400,
        eligible: false
      }
    }
  }
];

const targetId = 103;

const increase = 0;

document.getElementById('ans').textContent= JSON.stringify(increaseEmployeeBonus(employees, targetId, increase));
