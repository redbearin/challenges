const tax = .06

checkout = arr => {
  let total = 0;
  let sub;
  for (let i = 0; i < arr.length; i++) {
    sub = arr[i].prc * arr[i].qty;
    if (arr[i].taxable) {
      sub *= 1 + tax;
    }
    total += sub;
  }
  return Math.round(total * 100)/100;
}

const items = [
  { desc: "potato chips", prc: 2, qty: 2, taxable: false },
  { desc: "soda", prc: 3, qty: 2, taxable: false },
  { desc: "paper plates", prc: 5, qty: 1, taxable: true }
];

document.getElementById('ans').textContent = checkout(items);