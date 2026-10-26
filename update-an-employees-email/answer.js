const updateEmployeeEmail = (employees, empId, newEmail) => 
  employees.map((employee) => 
    employee.id === empId ?
    {
      ...employee,
      contact: {
        ...employee.contact,
        email: newEmail
      }
    } :
    employee
  );


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

const empId = 102;
const newEmail = "bob.new@company.com";

document.getElementById('ans').textContent = JSON.stringify(updateEmployeeEmail(employees, empId, newEmail));