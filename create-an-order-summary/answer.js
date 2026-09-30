const summarizeOrder = order => {
  const {customer, item, price, quantity = 1} = order;
  return `${customer} ordered ${quantity} ${item}(s) for $${(price * quantity).toFixed(2)}`;
};

const order = {
  customer: "Maria",
  item: "Laptop Stand",
  price: 45,
  quantity: 2
};

document.getElementById('ans').textContent =  summarizeOrder(order);