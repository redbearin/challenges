simonSays = (arr1, arr2) => {
  for (let i = 2; i < arr1.length; i++) {
    if (arr1[i - 1] !== arr2[i]) {
      return false;
    }
  }
  if (arr2[0] + 1 === arr1[0] || 
      (arr2[0] >= arr1[arr1.length - 1] && arr2[0] > arr2[1])) {
    return true;
  }
  return false;
}

const arr1 = [1, 2];
const arr2 = [5, 5];

document.getElementById('ans').textContent = simonSays(arr1, arr2);
=======
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

