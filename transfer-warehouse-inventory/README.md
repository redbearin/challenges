Write a function named:
const transferInventory = (warehouses, fromId, toId, quantity) => {
  // Your solution
};

You are transferring inventory between two warehouses. Each warehouse has its own storage capacity and operational status.
Starting data
const warehouses = [
  {
    id: 101,
    name: "North",
    inventory: {
      quantity: 120,
      capacity: 200,
      active: true,
      reserved: 30
    }
  },
  {
    id: 102,
    name: "South",
    inventory: {
      quantity: 60,
      capacity: 150,
      active: true,
      reserved: 10
    }
  },
  {
    id: 103,
    name: "East",
    region: "Central",
    inventory: {
      quantity: 180,
      capacity: 200,
      active: true,
      reserved: 40
    }
  },
  {
    id: 104,
    name: "West",
    inventory: {
      quantity: 50,
      capacity: 100,
      active: false,
      reserved: 0
    }
  }
];


Rules
A transfer is permitted only when:
- The requested quantity is greater than zero.
- The source and destination IDs are different.
- Both warehouses exist and are active.
- The source has enough unreserved inventory.
- The destination has enough remaining storage capacity.
The new business rule is that reserved inventory cannot be transferred.

For example, the North warehouse has 120 units, but 30 are reserved. Therefore, only 90 units are available for transfer.

All transfers must be all-or-nothing.
Expected behavior
Transfer	Expected result
101 → 102, 40 units	North: 80, South: 100
101 → 102, 90 units	North: 30, South: 150
101 → 102, 100 units	Rejected: insufficient unreserved inventory
101 → 103, 20 units	North: 100, East: 200
101 → 103, 30 units	Rejected: insufficient capacity
101 → 104, 10 units	Rejected: inactive destination
104 → 101, 10 units	Rejected: inactive source
101 → 101, 10 units	Rejected: same warehouse

Implementation requirements
For this particular exercise, we're practicing an alternative to .map().

Use .findIndex() to locate the warehouses, create a shallow copy of the array using spread syntax, and replace the two affected elements directly by their indexes.

As before, preserve all unrelated properties and original references for unchanged warehouses. Always return a new array, even when a transfer is rejected.

Do not mutate the original data.

Assume unique IDs, valid inventory objects, and integer quantities. Reserved inventory never exceeds total inventory, and existing inventory never exceeds capacity.

You're free to organize your guard clauses however you think is most efficient and readable.