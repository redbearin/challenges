multiply = arr => {
  const newArr = [];
  let sub;
  for (let i = 0; i < arr.length; i++) {
    sub = [];
    for (let j = 0; j < arr.length; j++) {
      sub.push(arr[i]);
    }
    newArr.push(sub);
  }
  return JSON.stringify(newArr);
}

const arr = [4,5];

document.getElementById('ans').textContent = multiply(arr);