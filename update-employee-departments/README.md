Write a function called updateDepartments that receives an array of employees and returns a new array where every employee's department is set to "Engineering".

Input
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


Expected output
[
  {
    id: 101,
    name: "Alice",
    department: "Engineering",
    active: true
  },
  {
    id: 102,
    name: "Bob",
    department: "Engineering",
    salary: 65000
  },
  {
    id: 103,
    name: "Charlie",
    department: "Engineering",
    remote: true
  }
]


Requirements
1. Use .map() to create a new array.
2. Use object spread syntax (...) inside the callback.
3. Set department to "Engineering" for every employee.
4. Preserve all other properties, including unexpected ones.
5. Do not mutate the original employee objects.
6. Return new employee objects, not references to the originals.
You don't need object destructuring or object rest for this challenge. We're focusing on object spread and property override order.