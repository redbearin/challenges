arrBetween = (num1, num2, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num1 && arr[i] < num2) {
      newArr.push(arr[i]);
    }
  }
  return JSON.stringify(newArr);
}

const num1 = 3;
const num2 = 8;
const arr = [1, 5, 95, 0, 4, 7];

document.getElementById('ans').textContent = arrBetween(num1, num2, arr);