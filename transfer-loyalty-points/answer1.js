"use strict";

const assert = require("assert").strict;

const transferLoyaltyPoints = (customers, fromId, toId, amount) => {
  if (amount <= 0 ||
      fromId === toId) {
    return [...customers];
  }
  const custDec = customers.find(customer => customer.id === fromId);
  const custInc = customers.find(customer => customer.id === toId);
  if (custDec === undefined ||
      custInc === undefined ||
      custDec.loyalty.points < amount || 
      custInc.loyalty.points + amount > custInc.loyalty.maximum ||
      !custDec.loyalty.active ||
      !custInc.loyalty.active) {
    return [...customers];
  }
  return customers.map(customer => {
    if (customer.id === fromId) {
      return {
        ...customer,
        loyalty: {
          ...customer.loyalty,
          points: customer.loyalty.points - amount
        }
      };
    }
    if (customer.id === toId) {
      return {
        ...customer,
        loyalty: {
          ...customer.loyalty,
          points: customer.loyalty.points + amount
        }
      };
    }
    return customer;
  });
};

const customers = [
  {
    id: 101,
    name: "Alice",
    loyalty: {
      points: 150,
      maximum: 300,
      active: true,
      tier: "Silver"
    }
  },
  {
    id: 102,
    name: "Bob",
    loyalty: {
      points: 80,
      maximum: 200,
      active: true,
      tier: "Bronze"
    }
  },
  {
    id: 103,
    name: "Charlie",
    email: "charlie@example.com",
    loyalty: {
      points: 190,
      maximum: 200,
      active: true,
      tier: "Gold"
    }
  },
  {
    id: 104,
    name: "Diana",
    loyalty: {
      points: 50,
      maximum: 150,
      active: false,
      tier: "Silver"
    }
  }
];

const fromId = 102;
const toId = 103;
const amount = 5;

console.log(transferLoyaltyPoints(customers, fromId, toId, amount));

const snapshot = JSON.parse(JSON.stringify(customers));

// 1. Successful transfer
const result = transferLoyaltyPoints(customers, 101, 102, 40);

assert.strictEqual(result[0].loyalty.points, 110);
assert.strictEqual(result[1].loyalty.points, 120);
assert.notStrictEqual(result, customers);

console.log("Successful transfer passed!");

// 2. Both updated customers have new references
assert.notStrictEqual(result[0], customers[0]);
assert.notStrictEqual(result[1], customers[1]);
assert.notStrictEqual(result[0].loyalty, customers[0].loyalty);
assert.notStrictEqual(result[1].loyalty, customers[1].loyalty);

console.log("Updated references passed!");

// 3. Unchanged customers preserve references
assert.strictEqual(result[2], customers[2]);
assert.strictEqual(result[3], customers[3]);

console.log("Unchanged references passed!");

// 4. Transfer exactly fills recipient's capacity
const exact = transferLoyaltyPoints(customers, 101, 103, 10);

assert.strictEqual(exact[0].loyalty.points, 140);
assert.strictEqual(exact[2].loyalty.points, 200);

console.log("Exact capacity passed!");

// 5. Recipient has insufficient room
const noRoom = transferLoyaltyPoints(customers, 101, 103, 20);

assert.notStrictEqual(noRoom, customers);
customers.forEach((customer, index) => {
  assert.strictEqual(noRoom[index], customer);
});

console.log("Insufficient room passed!");

// 6. Sender has insufficient points
const insufficient = transferLoyaltyPoints(customers, 102, 101, 100);

customers.forEach((customer, index) => {
  assert.strictEqual(insufficient[index], customer);
});

console.log("Insufficient points passed!");

// 7. Inactive recipient
const inactive = transferLoyaltyPoints(customers, 101, 104, 20);

customers.forEach((customer, index) => {
  assert.strictEqual(inactive[index], customer);
});

console.log("Inactive recipient passed!");

// 8. Same sender and recipient
const same = transferLoyaltyPoints(customers, 101, 101, 20);

customers.forEach((customer, index) => {
  assert.strictEqual(same[index], customer);
});

console.log("Same customer passed!");

// 9. Missing customer
const missing = transferLoyaltyPoints(customers, 101, 999, 20);

customers.forEach((customer, index) => {
  assert.strictEqual(missing[index], customer);
});

console.log("Missing customer passed!");

// 10. Zero and negative amounts
for (const amount of [0, -10]) {
  const invalid = transferLoyaltyPoints(customers, 101, 102, amount);

  customers.forEach((customer, index) => {
    assert.strictEqual(invalid[index], customer);
  });
}

console.log("Invalid amounts passed!");

// 11. All original data remains unchanged
assert.deepStrictEqual(customers, snapshot);

console.log("Immutability passed!");

// 12. Other properties are preserved
assert.deepStrictEqual(
  transferLoyaltyPoints(customers, 101, 103, 10)[2],
  {
    id: 103,
    name: "Charlie",
    email: "charlie@example.com",
    loyalty: {
      points: 200,
      maximum: 200,
      active: true,
      tier: "Gold"
    }
  }
);

console.log("Property preservation passed!");

// 13. Unexpected properties are preserved
const extras = [
  {
    id: 1,
    vip: true,
    loyalty: {
      points: 60,
      maximum: 100,
      active: true,
      rewardsEnabled: false
    }
  },
  {
    id: 2,
    region: "West",
    loyalty: {
      points: 20,
      maximum: 100,
      active: true,
      tier: "New"
    }
  }
];

const extraResult = transferLoyaltyPoints(extras, 1, 2, 30);

assert.strictEqual(extraResult[0].vip, true);
assert.strictEqual(extraResult[0].loyalty.rewardsEnabled, false);
assert.strictEqual(extraResult[0].loyalty.points, 30);
assert.strictEqual(extraResult[1].region, "West");
assert.strictEqual(extraResult[1].loyalty.tier, "New");
assert.strictEqual(extraResult[1].loyalty.points, 50);

console.log("Unexpected properties passed!");