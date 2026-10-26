Write a function named updateEmployeeEmail that accepts:
- employees: an array of employee objects
- targetId: the ID of the employee to update
- newEmail: the replacement email address
Update only the matching employee's contact.email.
Input
const employees = [
  {
    id: 101,
    name: "Alice",
    contact: {
      email: "alice@company.com",
      phone: "555-0101"
    }
  },
  {
    id: 102,
    name: "Bob",
    department: "Sales",
    contact: {
      email: "bob@company.com",
      phone: "555-0102"
    }
  },
  {
    id: 103,
    name: "Charlie",
    contact: {
      email: "charlie@company.com",
      phone: "555-0103"
    }
  }
];


Calling:
updateEmployeeEmail(employees, 102, "bob.new@company.com");


should return:
[
  {
    id: 101,
    name: "Alice",
    contact: {
      email: "alice@company.com",
      phone: "555-0101"
    }
  },
  {
    id: 102,
    name: "Bob",
    department: "Sales",
    contact: {
      email: "bob.new@company.com",
      phone: "555-0102"
    }
  },
  {
    id: 103,
    name: "Charlie",
    contact: {
      email: "charlie@company.com",
      phone: "555-0103"
    }
  }
]


Requirements
1. Use an arrow function with an implicit return.
2. Use .map() and a ternary expression.
3. Update only the employee whose id matches targetId.
4. For the matching employee, use two object spreads: one for the employee and one for contact.
5. Preserve every other property, including unexpected properties.
6. Do not mutate the original array or its objects.
7. Return the original object references for employees that don't match.
8. If no ID matches, return a new array containing the original employee objects.
You can assume IDs are unique and every employee has a contact object.