const removeDuplicates = users => {
  const uniqueUsers = new Map();

  for (const item of users) {
    if (!uniqueUsers.has(item.id)) {
      uniqueUsers.set(item.id, item);
    }
  }
  return JSON.stringify([...uniqueUsers.values()]);
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" },
  { id: 4, name: "Diana" }
];

document.getElementById('ans').textContent = removeDuplicates(users);