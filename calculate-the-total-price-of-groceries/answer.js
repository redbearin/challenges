getTotalPrice = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].quantity * arr[i].price;
  }
  console.log(Math.round(total * 100))
  return Math.round(total * 100)/100;
}

const arr = [
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
];

document.getElementById('ans').textContent =  getTotalPrice(arr);