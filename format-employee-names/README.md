Given:
const employees = [
  { first_name: "Maria", last_name: "Lopez", department: "Sales" },
  { first_name: "David", last_name: "Chen", department: "Engineering" },
  { first_name: "Sarah", last_name: "Jones" }
];

Write:
const formatEmployees = employees => {
  // your solution
};

Return:
[
  "Maria Lopez (Sales)",
  "David Chen (Engineering)",
  "Sarah Jones (General)"
]

Requirements:
- Use destructuring inside your solution.
- Rename first_name to firstName while destructuring.
- Rename last_name to lastName.
- Give department a default value of "General".
- Don't modify the original objects.
- Preserve the original order.
You can rename and provide defaults at the same time:
const { oldName: newName = "Default" } = object;