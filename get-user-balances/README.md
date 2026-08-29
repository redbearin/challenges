Given:

const transactions = [
  { user: "Alice", amount: 50, type: "purchase" },
  { user: "Bob", amount: 100, type: "purchase" },
  { user: "Alice", amount: 20, type: "refund" },
  { user: "Charlie", amount: 75, type: "purchase" },
  { user: "Bob", amount: 30, type: "refund" },
  { user: "Alice", amount: 80, type: "purchase" },
  { user: "Charlie", amount: 25, type: "refund" },
];

Write a function:

function getUserBalances(transactions) {
  // your code
}

For each user, calculate their net spending:

purchase → add the amount
refund   → subtract the amount

Then return an array of objects sorted from highest net spending to lowest.

For the data above, your function should return:

[
  { user: "Alice", balance: 110 },
  { user: "Bob", balance: 70 },
  { user: "Charlie", balance: 50 }
]

Rules: Don’t hard-code any usernames, the function should work with any number of transactions/users, and try to solve it without nested loops.

Bonus: Remove users whose final balance is 0 or negative.