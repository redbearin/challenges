getTotalPrice = groceries => {
  let total = 0;
  for (let i = 0; i < groceries.length; i++) {
    total += groceries[i].quantity * groceries[i].price;
  }
  return total.toFixed(2);
}

const groceries = [
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
];

document.getElementById('ans').textContent = getTotalPrice(groceries);