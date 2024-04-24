dis = (price, discount) => {
  return Math.round((price - (price * discount/100)) * 100) / 100;
}

const price = 1500;
const discount = 50;

document.getElementById('ans').textContent = dis(price, discount);