getDrinkID = (juice, qty) => {
  const juiceArr = juice.split(' ');
  let final = '';
  for (let i = 0; i < juiceArr.length; i++) {
    final += juiceArr[i].slice(0, 3).toUpperCase();
  }
  return final + qty.slice(0, -2);
}

const juice = "passion fruit";
const qty = "750ml";

document.getElementById('ans').textContent = getDrinkID(juice, qty);