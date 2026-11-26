"use strict";

const assert = require("assert").strict;

const approveOrder = (orders, targetId) => {
  const idx = orders.findIndex(order => order.id === targetId);
  if (idx === -1) {
    return [...orders];
  }
  const order = orders[idx];
  if (order.status === 'pending' &&
      order.items.length > 0 &&
      order.items.every(item => 
        item.active === true &&
        item.available >= item.quantity)
      ) {
    return orders.with(idx, {
      ...order,
      status: 'approved'
    });
  }
  return [...orders];
};

const orders = [
  {
    id: 101,
    customer: "Alice",
    status: "pending",
    items: [
      {
        product: "Keyboard",
        quantity: 2,
        available: 10,
        active: true
      },
      {
        product: "Mouse",
        quantity: 3,
        available: 5,
        active: true
      }
    ]
  },
  {
    id: 102,
    customer: "Bob",
    status: "pending",
    items: [
      {
        product: "Monitor",
        quantity: 4,
        available: 2,
        active: true
      }
    ]
  },
  {
    id: 103,
    customer: "Charlie",
    status: "pending",
    items: [
      {
        product: "Printer",
        quantity: 1,
        available: 10,
        active: false
      }
    ]
  },
  {
    id: 104,
    customer: "Diana",
    status: "approved",
    items: [
      {
        product: "Laptop",
        quantity: 1,
        available: 5,
        active: true
      }
    ]
  },
  {
    id: 105,
    customer: "Edward",
    status: "pending",
    items: []
  },
  {
    id: 106,
    customer: "Frank",
    status: "pending",
    priority: true,
    items: [
      {
        product: "Speakers",
        quantity: 5,
        available: 5,
        active: true
      }
    ]
  }
];

const targetId = 101;

console.log(approveOrder(orders, targetId));


const snapshot = structuredClone(orders);

// 1. Successful approval
const approved = approveOrder(orders, 101);

assert.strictEqual(approved[0].status, "approved");
assert.notStrictEqual(approved, orders);
assert.strictEqual(approved.length, orders.length);

console.log("Successful approval passed!");

// 2. Updated order has a new reference
assert.notStrictEqual(approved[0], orders[0]);

console.log("Updated reference passed!");

// 3. Items array retains its original reference
assert.strictEqual(approved[0].items, orders[0].items);

console.log("Items reference passed!");

// 4. Unchanged orders retain original references
orders.forEach((order, index) => {
  if (index !== 0) {
    assert.strictEqual(approved[index], order);
  }
});

console.log("Unchanged references passed!");

// Helper for unsuccessful approvals
const assertUnchanged = (data, targetId) => {
  const result = approveOrder(data, targetId);

  assert.notStrictEqual(result, data);
  assert.strictEqual(result.length, data.length);

  data.forEach((order, index) => {
    assert.strictEqual(result[index], order);
  });
};

// 5. Insufficient inventory
assertUnchanged(orders, 102);

console.log("Insufficient inventory passed!");

// 6. Inactive product
assertUnchanged(orders, 103);

console.log("Inactive product passed!");

// 7. Already approved
assertUnchanged(orders, 104);

console.log("Already approved passed!");

// 8. Empty order
assertUnchanged(orders, 105);

console.log("Empty order passed!");

// 9. Exact available inventory
const exact = approveOrder(orders, 106);

assert.strictEqual(exact[5].status, "approved");
assert.strictEqual(exact[5].priority, true);
assert.strictEqual(exact[5].items, orders[5].items);

console.log("Exact inventory passed!");

// 10. Missing order
assertUnchanged(orders, 999);

console.log("Missing order passed!");

// 11. Cancelled order
const cancelled = [{
  id: 201,
  status: "cancelled",
  items: [{
    product: "Keyboard",
    quantity: 1,
    available: 10,
    active: true
  }]
}];

assertUnchanged(cancelled, 201);

console.log("Cancelled order passed!");

// 12. Multiple items with one invalid item
const mixed = [{
  id: 301,
  status: "pending",
  items: [
    {
      product: "Keyboard",
      quantity: 1,
      available: 10,
      active: true
    },
    {
      product: "Mouse",
      quantity: 5,
      available: 2,
      active: true
    },
    {
      product: "Monitor",
      quantity: 1,
      available: 10,
      active: true
    }
  ]
}];

assertUnchanged(mixed, 301);

console.log("Mixed validity passed!");

// 13. Unexpected properties preserved
const extras = [{
  id: 401,
  status: "pending",
  expedited: true,
  shipping: {
    method: "Express"
  },
  items: [{
    product: "Laptop",
    quantity: 2,
    available: 10,
    active: true,
    warranty: "Extended"
  }]
}];

const extraResult = approveOrder(extras, 401);

assert.deepStrictEqual(extraResult, [{
  ...extras[0],
  status: "approved"
}]);

assert.notStrictEqual(extraResult[0], extras[0]);
assert.strictEqual(extraResult[0].shipping, extras[0].shipping);
assert.strictEqual(extraResult[0].items, extras[0].items);

console.log("Unexpected properties passed!");

// 14. Empty orders array
assertUnchanged([], 101);

console.log("Empty orders array passed!");

// 15. Original data remains unchanged
assert.deepStrictEqual(orders, snapshot);

console.log("Immutability passed!");

console.log("\nAll 15 test groups passed!");