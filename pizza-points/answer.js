pizzaPoints = (customers, minOrders, minPrice) => {
  let count;
  let winners = [];
  for (let key in customers) {
    count = 0;
    for (let j = 0; j < customers[key].length; j++) {
      if (customers[key][j] >= minPrice) {
        count++;
        if (count === minOrders) {
          winners.push(key);
          break;
        }
      }
    }
  }
  return JSON.stringify(winners.sort());
}

const customers = {
  "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
};

const minOrders = 3
const minPrice = 10;

document.getElementById('ans').textContent = pizzaPoints(customers, minOrders, minPrice);