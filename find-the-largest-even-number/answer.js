largestEven = arr => {
  const sortedArr = arr.sort((a,b) => b - a);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] % 2 === 0) {
      return sortedArr[i];
    }
  }
  return -1;
}

const arr = [1, 3, 5, 7];

document.getElementById('ans').textContent = largestEven(arr);