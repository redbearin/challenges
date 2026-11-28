You are developing a payroll management system. Each department contains an array of employees and a summary of its payroll.

Write a function named:
const recalculatePayroll = (departments, targetId) => {
  // Your solution
};


The function recalculates the payroll summary for one department based on its current active employees.

Starting data

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

Data definitions
Property	Meaning
id	Unique department identifier.
employees	All employees associated with the department, including inactive employees.
salary	Individual employee's annual base salary, excluding bonuses.
bonus	Individual employee's annual bonus, separate from salary.
active	Whether the employee must be included in payroll calculations.
payroll.totalSalary	Combined base salaries of active employees.
payroll.totalBonus	Combined bonuses of active employees.
payroll.employeeCount	Number of active employees.
payroll.currency	Currency designation; must remain unchanged.

The existing payroll summary may contain outdated values. Your function must calculate the correct values from the employee data rather than adjusting the existing totals.

Assume all salaries and bonuses are nonnegative integers, all active properties are booleans, all required objects and arrays exist, and department IDs are unique.

Business rules
1. Locate the department matching targetId.
2. Include only employees whose active property is true.
3. Calculate the combined salaries, combined bonuses, and number of active employees.
4. If there are no active employees, all three calculated values must be zero.
5. If all three calculated values already match the existing payroll summary, return the original department object.
6. Otherwise, update the three payroll summary properties immutably.
Do not change any employee data. This function recalculates a summary; it does not modify salaries, bonuses, or employment status.
Expected behavior
Department 101 — Engineering
Before recalculationTotal salary$0
Total bonus$0
Employee count0


After recalculationTotal salary$140,000
Total bonus$8,000
Employee count2


Charlie's salary and bonus are excluded because he is inactive.
Target ID	Expected result
101	Salary: 140000, bonus: 8000, count: 2
102	Already correct; preserve original department reference
103	Salary: 0, bonus: 0, count: 0
999	No match; preserve all department references

Implementation requirements
- Use .findIndex() to locate the department.
- Use .reduce() to calculate the payroll totals.
- Avoid processing employees belonging to other departments.
- Always return a new outer array.
- Create new department and payroll objects only when at least one calculated value changes.
- Preserve the original employees array reference.
- Preserve all unrelated properties and unchanged object references.
- Do not mutate the original data.
You're free to choose whether to use .filter() before .reduce() or handle the active employee condition directly inside .reduce().

You're also free to choose your preferred immutable array replacement technique.