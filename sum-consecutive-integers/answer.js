sumConsecutives = arr => {
  let sum = arr[0];
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i-1]) {
      newArr.push(sum);
      sum = arr[i];  
    }
    else {
      sum += arr[i];
    }
    if (i === arr.length - 1) {
      newArr.push(sum);
    }
  }
  return JSON.stringify(newArr);
}

const arr = [0, 7, 7, 7, 5, 4, 9, 9, 0];

document.getElementById('ans').textContent = sumConsecutives(arr);