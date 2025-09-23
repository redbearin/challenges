discount = (price, disc) => {
  if (disc === " ") {
    return price;
  }
  let discArr = disc.split(', ');
  for (let i = 0; i < discArr.length; i++) {
    if (discArr[i].includes('%')) {
      price -= price * +discArr[i].slice(0, -1)/100;
    }
  }
  for (let i = 0; i < discArr.length; i++) {
    if (!discArr[i].includes('%')) {
      price -= discArr[i];
    }
  }
  return Math.round(price * 100)/100
}

const price = 237.037;
const disc = '25%, 25%, 25%';

document.getElementById('ans').textContent = discount(price, disc);