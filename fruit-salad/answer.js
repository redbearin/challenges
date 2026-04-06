fruitSalad = fruits => {
  const splArr = [];
  for (let i = 0 ; i < fruits.length; i++) {
    splArr.push(fruits[i].slice(0, fruits[i].length/2), fruits[i].slice(fruits[i].length/2));
  }
  return splArr.sort().join('')
}

const fruits = ["apple", "pear", "grapes"];

document.getElementById('ans').textContent = fruitSalad(fruits);