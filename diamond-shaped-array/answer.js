diamondArrays = num => {
  const arr = [];
  for (let j = 1; j <= num; j++) {
    arr.push(Array(j).fill(j));
  }
  for (let j = num - 1; j > 0; j--) {
    arr.push(Array(j).fill(j));
  }
  return JSON.stringify(arr);
}

const num = 2;

document.getElementById('ans').textContent = diamondArrays(num);