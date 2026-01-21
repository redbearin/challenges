oddeven = arr => {
  let count = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      count++;
    }
  }
  return count/arr.length > .5 ? true: false;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

document.getElementById('ans').textContent = oddeven(arr);