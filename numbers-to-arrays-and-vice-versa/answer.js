toArray = num => {
  return JSON.stringify(num.toString().split('').map(x => parseInt(x, 10)));
}

toNumber = arr => {
  return +arr.reduce((acc, val) => acc+val, '');
}

const num = 235; 
const arr = [2, 3, 5];

document.getElementById('ans').textContent = toArray(num);
document.getElementById('ans1').textContent = toNumber(arr);



