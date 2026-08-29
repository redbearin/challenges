getUserBalances = transactions => {
  const totals = {};
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].user in totals) {
      transactions[i].type === "purchase"?
        totals[transactions[i].user] += transactions[i].amount:
        totals[transactions[i].user] -= transactions[i].amount;
    }
    else {
      transactions[i].type === "purchase" ?
      totals[transactions[i].user] = transactions[i].amount:
      totals[transactions[i].user] = -transactions[i].amount;
    }
  }
  const arr = [];
  for (let key in totals) {
    if (totals[key] > 0) {
      arr.push({user: key, balance: totals[key]})
    }
  }
  return JSON.stringify(arr.sort((a,b) => b.balance - a.balance));
}

const transactions = [
  { user: "Alice", amount: 50, type: "purchase" },
  { user: "Bob", amount: 200, type: "purchase" },
  { user: "Alice", amount: 20, type: "refund" },
  { user: "Charlie", amount: 75, type: "purchase" },
  { user: "Bob", amount: 30, type: "refund" },
  { user: "Alice", amount: 80, type: "purchase" },
  { user: "Charlie", amount: 25, type: "refund" },
];

document.getElementById('ans').textContent = getUserBalances(transactions);