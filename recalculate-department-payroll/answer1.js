
const recalculatePayroll = (departments, targetId) => {
  const idx = departments.findIndex(department => department.id === targetId);
  if (idx === -1) {
    return [...departments];
  }
  const department = departments[idx];
  let ttlSalary = 0;
  let ttlBonus = 0;
  let ttlActiveEmployees = 0;
  for (const employee of department.employees) {
    if (employee.active) {
      ttlSalary += employee.salary;
      ttlBonus += employee.bonus;
      ttlActiveEmployees++;
    }
  }


};

const departments = [
  {
    id: 101,
    name: "Engineering",
    employees: [
      {
        name: "Alice",
        salary: 80000,
        bonus: 5000,
        active: true
      },
      {
        name: "Bob",
        salary: 60000,
        bonus: 3000,
        active: true
      },
      {
        name: "Charlie",
        salary: 70000,
        bonus: 4000,
        active: false
      }
    ],
    payroll: {
      totalSalary: 0,
      totalBonus: 0,
      employeeCount: 0,
      currency: "USD"
    }
  },
  {
    id: 102,
    name: "Marketing",
    employees: [
      {
        name: "Diana",
        salary: 50000,
        bonus: 2000,
        active: true
      }
    ],
    payroll: {
      totalSalary: 50000,
      totalBonus: 2000,
      employeeCount: 1,
      currency: "USD"
    }
  },
  {
    id: 103,
    name: "Support",
    location: "Remote",
    employees: [],
    payroll: {
      totalSalary: 40000,
      totalBonus: 1000,
      employeeCount: 1,
      currency: "USD"
    }
  }
];

const targetId = 102;

console.log(recalculatePayroll(departments, targetId));

// 1. Locate the department matching targetId.
// 2. Include only employees whose active property is true.
// 3. Calculate the combined salaries, combined bonuses, and number of active employees.
// 4. If there are no active employees, all three calculated values must be zero.
// 5. If all three calculated values already match the existing payroll summary, return the original department object.
// 6. Otherwise, update the three payroll summary properties immutably.
