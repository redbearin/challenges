You have a current inventory and a list of updates:
const inventory = [
  { id: 1, name: "Keyboard", quantity: 5 },
  { id: 2, name: "Mouse", quantity: 8 },
  { id: 3, name: "Monitor", quantity: 4 }
];

const updates = [
  { id: 2, quantity: 3 },
  { id: 3, quantity: -2 },
  { id: 4, name: "Webcam", quantity: 6 }
];

Write:
const updateInventory = (inventory, updates) => {
  // your solution
};

The result should be:
[
  { id: 1, name: "Keyboard", quantity: 5 },
  { id: 2, name: "Mouse", quantity: 11 },
  { id: 3, name: "Monitor", quantity: 2 },
  { id: 4, name: "Webcam", quantity: 6 }
]

The rules are:
- Match products by id.
- If an update matches an existing product, add its quantity to the existing quantity.
- If an update has a new id, add that product to the end.
- Existing products retain their original order.
- New products appear in the order they're encountered in updates.
- An existing product's name should remain unchanged.
- Each id appears at most once in inventory and at most once in updates.
- Quantities can be positive, zero, or negative.
- Do not modify either input array or the objects inside them.
- Aim for O(n + m) time.
For example, after calling:
const result = updateInventory(inventory, updates);

these must still be unchanged:
inventory[1].quantity; // 8
updates[0].quantity;   // 3

There are several ways to attack this. A nested-loop solution is easy but O(n × m). There's a much cleaner approach using one of the data structures you've been practicing with recently.
And feel free to experiment with newer syntax/APIs even if you're unsure whether they're appropriate—that's part of the exercise.