calculateDifference = (items, limit) => {
  let loss = 0;
  for (key in items) {
    loss += items[key];
  }
  return loss - limit;
}
const items = { skate: 10, painting: 20 };
const limit = 19;

document.getElementById('ans').textContent = calculateDifference(items, limit);