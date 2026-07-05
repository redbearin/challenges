product = arr => {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a,b) => b - a);
  if (uniqueArr.length === 1) {
    return Math.pow(uniqueArr[0], 2);
  }
  return uniqueArr[0] * uniqueArr[1];
}

const arr = [-2, -2, -1, -1];

document.getElementById('ans').textContent = product(arr);