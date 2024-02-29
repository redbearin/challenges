simonSays = arr=> {
  let sub;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    sub = arr[i].split(' ');
    if (sub[0] === 'Simon' && sub[1] === 'says') {
      switch (sub[2]) {
        case 'add':
          total += +sub[3];
          break;
        case 'multiply':
          total *= +sub[4];
          break;
        case 'subtract':
          total -= +sub[3];
      }
    }
  }
  return total;
}

const arr = [
  "Simon says add 4",
  "Simon says add 6",
  "Then add 5"
];

document.getElementById('ans').textContent = simonSays(arr);