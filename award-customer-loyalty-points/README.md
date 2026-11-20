Write a function named awardLoyaltyPoints that accepts:
- customers: an array of customer objects
- targetId: the ID of the customer receiving points
- points: a nonnegative number of points to award
Each customer has a nested loyalty object containing points, maximum, and active.

Your function should increase the customer's loyalty points, without exceeding their individual maximum.

Only active customers can receive points.
Input
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


Expected behavior
Call	Result	Customer reference
ID 101, award 30	120 → 150	New
ID 102, award 30	Inactive; unchanged	Original
ID 103, award 50	190 → 200	New
ID 104, award 30	Already at maximum	Original
ID 101, award 0	No change	Original
ID 999, award 30	No match	All original

Requirements
1. Declare the function using const and an arrow function.
2. Use .map() with a block-bodied callback.
3. Use an early return to skip customers whose IDs don't match or whose loyalty accounts are inactive.
4. Calculate const newPoints only after passing the guard clause.
5. Use Math.min() to cap the points at the customer's maximum.
6. If newPoints equals the original points, return the original customer object.
7. Otherwise, create a new customer object using two spreads: ...customer and ...customer.loyalty.
8. Preserve all other properties, including unexpected ones.
9. Do not mutate the original data.
10. Preserve original object references whenever no update is necessary.
11. Always return a new array, even when no customer changes.
Assume IDs are unique, all loyalty objects exist, current points are between zero and the maximum, and the awarded points value is nonnegative and finite.