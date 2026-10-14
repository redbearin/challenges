Imagine you're preparing user information for display, but you don't want to include sensitive credentials.

Given:
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


Write:
const removePasswords = users => {
  // Your solution
};


The expected result is:
[
  {
    id: 101,
    name: "Maria",
    email: "maria@example.com",
    role: "Admin"
  },
  {
    id: 102,
    name: "David",
    email: "david@example.com",
    role: "Editor"
  },
  {
    id: 103,
    name: "Sarah",
    email: "sarah@example.com",
    role: "Viewer"
  }
]

Requirements
1. Use .map() to create a new array.
2. Destructure directly in the .map() callback parameter.
3. Extract password and use object rest syntax to collect all remaining properties.
4. Return the remaining properties for each user.
5. Preserve the original order.
6. Don't mutate the input array or its objects.
7. Your function should preserve any additional properties a user might have, even if they aren't shown in the examples.
You can assume each user is a plain object containing a password property.