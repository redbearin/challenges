const leader = arr => {
  // numbers that are bigger than every
  // number to right
  let bigger = [arr[arr.length - 1]];
  // flag the numbers to right are not 
  // all smaller
  let flag = false;
  // check to see if all number to right
  // are smaller
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < arr.length; j++) {
      // number to right is not smaller
      if (arr[i] <= arr[j]) {
        flag = true;
      }
    }
    // all numbers to right meet criteria
    if (!flag)
      bigger.unshift(arr[i]);
    // numbers to right do not meet criteria
    else
      flag = false;
  }
  return JSON.stringify(bigger);
};

const arr = [8, 7, 1, 2, 10, 3, 5];

document.getElementById('ans').textContent = leader(arr);