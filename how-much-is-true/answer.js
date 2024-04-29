countTrue = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
} 

const arr = [true, false, false, true, false];

document.getElementById('ans').textContent = countTrue(arr);