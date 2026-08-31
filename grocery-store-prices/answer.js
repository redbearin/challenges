getPrices = arr => {
  const prices = [];
  for (let i = 0; i < arr.length; i++) {
    prices.push(+/\(\$([^)]+)\)/.exec(arr[i])[1]);
  }
  return JSON.stringify(prices);
}

const arr = ["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"];

document.getElementById('ans').textContent = getPrices(arr);