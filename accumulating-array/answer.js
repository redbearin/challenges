accumulatingArray = arr => {
  const newArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    newArr.push(sum);
  }
  return JSON.stringify(newArr);
}

const arr = [];

document.getElementById('ans').textContent = accumulatingArray(arr);