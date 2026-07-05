splitArr = arr => {
  let [head, ...tail] = arr;
  return JSON.stringify(tail);
}

const arr = [1, 2, 3, 4];

document.getElementById('ans').textContent = splitArr(arr);