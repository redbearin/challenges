expensiveOrders = (orders, cost) => {
  const ordersGtrCost = {};
  for (let key in orders) {
    if (orders[key] > cost) {
      ordersGtrCost[key] = orders[key];
    }
  }
  return JSON.stringify(ordersGtrCost)
}

const orders = { "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }; 
const cost = 40;

document.getElementById('ans').textContent = expensiveOrders(orders, cost);