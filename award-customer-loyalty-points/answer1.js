"use strict";

const assert = require("assert").strict;

const awardLoyaltyPoints = (customers, targetId, points) =>
  customers.map(customer => {
    if (
      customer.id !== targetId ||
      !customer.loyalty.active ||
      points === 0 ||
      customer.loyalty.maximum === customer.loyalty.points
    ) {
      return customer;
    }

    const newPoints = Math.min(
      customer.loyalty.maximum,
      points + customer.loyalty.points
    );

    return {
      ...customer,
      loyalty: {
        ...customer.loyalty,
        points: newPoints
      }
    };
  });

const customers = [
  {
    id: 101,
    name: "Alice",
    loyalty: {
      points: 120,
      maximum: 200,
      active: true,
      tier: "Silver"
    }
  },
  {
    id: 102,
    name: "Bob",
    loyalty: {
      points: 80,
      maximum: 150,
      active: false,
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
      points: 200,
      maximum: 200,
      active: true,
      tier: "Gold"
    }
  }
];

const targetId = 101;

const points = 30;

console.log(awardLoyaltyPoints(customers, targetId, points));

const original = JSON.parse(JSON.stringify(customers));

// Test 1: Normal award
const normal = awardLoyaltyPoints(customers, 101, 30);

assert.strictEqual(normal[0].loyalty.points, 150);
assert.notStrictEqual(normal[0], customers[0]);
assert.notStrictEqual(normal[0].loyalty, customers[0].loyalty);

console.log("Normal award passed!");

// Test 2: Inactive customer remains unchanged
const inactive = awardLoyaltyPoints(customers, 102, 30);

assert.strictEqual(inactive[1], customers[1]);
assert.strictEqual(inactive[1].loyalty.points, 80);

console.log("Inactive customer passed!");

// Test 3: Points capped at maximum
const capped = awardLoyaltyPoints(customers, 103, 50);

assert.strictEqual(capped[2].loyalty.points, 200);
assert.strictEqual(capped[2].email, "charlie@example.com");

console.log("Maximum points passed!");

// Test 4: Already at maximum preserves reference
const maximum = awardLoyaltyPoints(customers, 104, 30);

assert.strictEqual(maximum[3], customers[3]);

console.log("Already at maximum passed!");

// Test 5: Zero points preserves reference
const zero = awardLoyaltyPoints(customers, 101, 0);

assert.strictEqual(zero[0], customers[0]);
assert.notStrictEqual(zero, customers);

console.log("Zero points passed!");

// Test 6: Unchanged customers retain references
assert.strictEqual(normal[1], customers[1]);
assert.strictEqual(normal[2], customers[2]);
assert.strictEqual(normal[3], customers[3]);

console.log("Unchanged references passed!");

// Test 7: Original data unchanged
assert.deepStrictEqual(customers, original);

console.log("Immutability passed!");

// Test 8: Missing ID
const missing = awardLoyaltyPoints(customers, 999, 30);

assert.notStrictEqual(missing, customers);

customers.forEach((customer, index) => {
  assert.strictEqual(missing[index], customer);
});

console.log("Missing ID passed!");

// Test 9: Other properties preserved
assert.deepStrictEqual(normal[0], {
  id: 101,
  name: "Alice",
  loyalty: {
    points: 150,
    maximum: 200,
    active: true,
    tier: "Silver"
  }
});

console.log("Property preservation passed!");

// Test 10: Unexpected properties preserved
const extras = [{
  id: 201,
  vip: true,
  loyalty: {
    points: 40,
    maximum: 100,
    active: true,
    rewardsEnabled: false
  }
}];

assert.deepStrictEqual(
  awardLoyaltyPoints(extras, 201, 25),
  [{
    id: 201,
    vip: true,
    loyalty: {
      points: 65,
      maximum: 100,
      active: true,
      rewardsEnabled: false
    }
  }]
);

console.log("Unexpected properties passed!");