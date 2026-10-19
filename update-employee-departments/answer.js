const updateDepartments = employees => JSON.stringify(employees.map(
  employee => ({
    ...employee, 
    department: "Engineering"
  }))
);

const employees = [
  {
    id: 101,
    name: "Alice",
    department: "Sales",
    active: true
  },
  {
    id: 102,
    name: "Bob",
    department: "Marketing",
    salary: 65000
  },
  {
    id: 103,
    name: "Charlie",
    department: "Support",
    remote: true
  }
];

document.getElementById('ans').textContent = updateDepartments(employees);