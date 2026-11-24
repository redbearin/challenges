"use strict";

const assert = require("assert").strict;

const transferInventory = (warehouses, fromId, toId, quantity) => {
  if (quantity <= 0 ||
      fromId === toId) {
    return [...warehouses];
  }

  const fromIdx = warehouses.findIndex(warehouse => warehouse.id === fromId);
  const toIdx = warehouses.findIndex(warehouse => warehouse.id === toId);

  if (fromIdx === -1 ||
      toIdx === -1 ||
      !warehouses[fromIdx].inventory.active ||
      !warehouses[toIdx].inventory.active ||
      warehouses[fromIdx].inventory.quantity - warehouses[fromIdx].inventory.reserved - quantity < 0 ||
      warehouses[toIdx].inventory.quantity + quantity > warehouses[toIdx].inventory.capacity
    ) {
    return [...warehouses];
  }

  const updatedWarehouses = [...warehouses];

  updatedWarehouses[fromIdx] = {
    ...warehouses[fromIdx],
    inventory: {
      ...warehouses[fromIdx].inventory,
      quantity: warehouses[fromIdx].inventory.quantity - quantity
    }
  };

  updatedWarehouses[toIdx] = {
    ...warehouses[toIdx],
    inventory: {
      ...warehouses[toIdx].inventory,
      quantity: warehouses[toIdx].inventory.quantity + quantity
    }
  };

  return updatedWarehouses;
};

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

const fromId = 101;
const toId = 102;
const quantity = 40;

console.log(transferInventory(warehouses, fromId, toId, quantity));

const snapshot = JSON.parse(JSON.stringify(warehouses));

// 1. Successful transfer
const result = transferInventory(warehouses, 101, 102, 40);

assert.strictEqual(result[0].inventory.quantity, 80);
assert.strictEqual(result[1].inventory.quantity, 100);
assert.notStrictEqual(result, warehouses);

console.log("Successful transfer passed!");

// 2. Updated object references
assert.notStrictEqual(result[0], warehouses[0]);
assert.notStrictEqual(result[1], warehouses[1]);
assert.notStrictEqual(result[0].inventory, warehouses[0].inventory);
assert.notStrictEqual(result[1].inventory, warehouses[1].inventory);

console.log("Updated references passed!");

// 3. Unchanged object references
assert.strictEqual(result[2], warehouses[2]);
assert.strictEqual(result[3], warehouses[3]);

console.log("Unchanged references passed!");

// 4. Transfer all unreserved inventory
const exact = transferInventory(warehouses, 101, 102, 90);

assert.strictEqual(exact[0].inventory.quantity, 30);
assert.strictEqual(exact[1].inventory.quantity, 150);
assert.strictEqual(exact[0].inventory.reserved, 30);

console.log("Exact available inventory passed!");

// 5. Exactly fill destination capacity
const full = transferInventory(warehouses, 101, 103, 20);

assert.strictEqual(full[0].inventory.quantity, 100);
assert.strictEqual(full[2].inventory.quantity, 200);

console.log("Exact capacity passed!");

// Helper for testing rejected transfers
const assertRejected = (fromId, toId, quantity) => {
  const rejected = transferInventory(
    warehouses, fromId, toId, quantity
  );

  assert.notStrictEqual(rejected, warehouses);
  assert.strictEqual(rejected.length, warehouses.length);

  warehouses.forEach((warehouse, index) => {
    assert.strictEqual(rejected[index], warehouse);
  });
};

// 6. Insufficient unreserved inventory
// East has room for 20, but this separate input
// isolates the reserved inventory restriction.
const reservedTest = [
  {
    id: 1,
    inventory: {
      quantity: 100,
      capacity: 200,
      reserved: 80,
      active: true
    }
  },
  {
    id: 2,
    inventory: {
      quantity: 0,
      capacity: 200,
      reserved: 0,
      active: true
    }
  }
];

const reservedResult = transferInventory(
  reservedTest, 1, 2, 30
);

assert.notStrictEqual(reservedResult, reservedTest);
assert.strictEqual(reservedResult.length, reservedTest.length);
assert.strictEqual(reservedResult[0], reservedTest[0]);
assert.strictEqual(reservedResult[1], reservedTest[1]);
assert.strictEqual(reservedTest[0].inventory.quantity, 100);
assert.strictEqual(reservedTest[1].inventory.quantity, 0);

console.log("Reserved inventory protection passed!");

// 7. Insufficient destination capacity
assertRejected(101, 103, 30);

console.log("Insufficient capacity passed!");

// 8. Inactive destination
assertRejected(101, 104, 10);

console.log("Inactive destination passed!");

// 9. Inactive source
assertRejected(104, 101, 10);

console.log("Inactive source passed!");

// 10. Same warehouse
assertRejected(101, 101, 10);

console.log("Same warehouse passed!");

// 11. Missing source and destination
assertRejected(999, 101, 10);
assertRejected(101, 999, 10);
assertRejected(998, 999, 10);

console.log("Missing warehouses passed!");

// 12. Invalid quantities
assertRejected(101, 102, 0);
assertRejected(101, 102, -10);

console.log("Invalid quantities passed!");

// 13. Property preservation
assert.deepStrictEqual(full[2], {
  id: 103,
  name: "East",
  region: "Central",
  inventory: {
    quantity: 200,
    capacity: 200,
    active: true,
    reserved: 40
  }
});

console.log("Property preservation passed!");

// 14. Unexpected properties
const extras = [
  {
    id: 1,
    automated: true,
    inventory: {
      quantity: 50,
      capacity: 100,
      active: true,
      reserved: 10,
      refrigerated: true
    }
  },
  {
    id: 2,
    manager: "Sam",
    inventory: {
      quantity: 20,
      capacity: 100,
      active: true,
      reserved: 5,
      temperature: 40
    }
  }
];

const extraResult = transferInventory(extras, 1, 2, 20);

assert.deepStrictEqual(extraResult, [
  {
    id: 1,
    automated: true,
    inventory: {
      quantity: 30,
      capacity: 100,
      active: true,
      reserved: 10,
      refrigerated: true
    }
  },
  {
    id: 2,
    manager: "Sam",
    inventory: {
      quantity: 40,
      capacity: 100,
      active: true,
      reserved: 5,
      temperature: 40
    }
  }
]);

console.log("Unexpected properties passed!");

// 15. Original data remains unchanged
assert.deepStrictEqual(warehouses, snapshot);

console.log("Immutability passed!");

console.log("\nAll 15 test groups passed!");