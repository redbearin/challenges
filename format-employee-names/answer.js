formatEmployees = employees => 
  JSON.stringify(employees.map(({first_name: firstName, last_name: lastName, department = "General"}) => `${firstName} ${lastName} (${department})`));

const employees = [
  { first_name: "Maria", last_name: "Lopez", department: "Sales" },
  { first_name: "David", last_name: "Chen", department: "Engineering" },
  { first_name: "Sarah", last_name: "Jones" }
];

document.getElementById('ans').textContent = formatEmployees(employees);