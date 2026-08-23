twentyFiveOnOne = arr => {
  let maxPrice = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > maxPrice) {
      maxPrice = arr[i].price;
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price === maxPrice) {
      sum += (arr[i].price * .75) + (arr[i].price * (arr[i].quantity - 1));
    }
    else {
      sum += arr[i].price * arr[i].quantity;
    }
  }
  return Math.round(sum * 100)/100;
}

const arr = [
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
];

document.getElementById('ans').textContent = twentyFiveOnOne(arr);