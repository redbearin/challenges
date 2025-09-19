sevenBoom = arr => {
  return /7/.test(arr.join('')) ?
  'Boom!' :
  'there is no 7 in the array';
}

const arr = [2, 55, 60, 97, 86];

document.getElementById('ans').textContent = sevenBoom(arr);