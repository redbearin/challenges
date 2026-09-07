asciiSort = arr => {
  let smallestSum;
  const smallerSumWord = '';
  let sum;

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i].charCodeAt(j);
    }
    if (i === 0) {
      smallestSum = sum;
    }
    else {
      if (sum < smallestSum) {
        return arr[1];
      }
      return arr[0];
    }
  }
}

const arr = ["hey", "man"];
document.getElementById('ans').textContent = asciiSort(arr);