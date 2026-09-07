checkSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // sum the two arr elements
      if (arr[i] + arr[j] === sum)
        return true;
    }
  }
  return false;
}
const arr = [4, 5, 6, 7, 8, 9];
const sum = 13;

document.getElementById("ans").textContent = checkSum(arr, sum);