twentyFiveOnOne = items => {
  // order from most expensive to least
  items.sort((a,b) => b.price - a.price);
  // add most expensive items to total
  let total = items[0].price * .75 + 
              items[0].price * (items[0].quantity - 1);
  // add other items to total
  for (let i = 1; i < items.length; i++) {
     total += items[i].price * items[i].quantity;
  }
  return total.toFixed(2);
}

const items= [
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
];

document.getElementById('ans').textContent = twentyFiveOnOne(items);