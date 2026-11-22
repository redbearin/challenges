You are building a loyalty program where one customer can transfer points to another customer.

Write a function:

const transferLoyaltyPoints = (customers, fromId, toId, amount) => {
  // Your solution
};


The function transfers points from one customer's loyalty account to another.
Starting data
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


Rules
A transfer can happen only when:
- Both customers exist.
- The sender and recipient are different customers.
- Both loyalty accounts are active.
- The amount is greater than zero.
- The sender has enough points to transfer the entire amount.
- The recipient has enough room to receive the entire amount without exceeding their maximum.
Transfers are all-or-nothing. If any condition fails, no points move.

If a transfer succeeds, return a new array with updated copies of the two affected customers. Preserve every other customer's original object reference.

If a transfer fails, return a new array containing all the original customer object references.

Do not mutate the input or lose any unrelated properties.

Assume unique IDs, valid loyalty objects, and finite nonnegative point balances. The amount argument is a finite number.
Expected behavior
Transfer	Expected result
101 → 102, amount 40	Alice 110, Bob 120
101 → 103, amount 10	Alice 140, Charlie 200
101 → 103, amount 20	Rejected: Charlie has insufficient room
102 → 101, amount 100	Rejected: Bob has insufficient points
101 → 104, amount 20	Rejected: Diana is inactive
101 → 101, amount 20	Rejected: same customer
101 → 999, amount 20	Rejected: recipient missing
101 → 102, amount 0	Rejected: zero amount

Suggested approach
This is a good opportunity to use .find() to locate the sender and recipient before calling .map().

Once you've found them, you can decide whether the transfer is valid. If it isn't, you can return a new array using:
return [...customers];


If the transfer is valid, use .map() to create the updated array. You only need new objects for the sender and recipient.

You can use whichever guard-clause structure you think is clearest. I won't require a specific number of guards.