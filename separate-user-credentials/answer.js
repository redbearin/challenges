const removePasswords = users => JSON.stringify(users.map(({password, ...rest}) => rest));

const users = [
  {
    id: 101,
    name: "Maria",
    email: "maria@example.com",
    password: "secret123",
    role: "Admin"
  },
  {
    id: 102,
    name: "David",
    email: "david@example.com",
    password: "hidden456",
    role: "Editor"
  },
  {
    id: 103,
    name: "Sarah",
    email: "sarah@example.com",
    password: "private789",
    role: "Viewer"
  }
];

document.getElementById('ans').textContent = removePasswords(users); 