countTowers = arr => {
  const last = arr[arr.length -1];
  const lastArr = last[0].split('   ');
  let count = 0;
  for (let i = 0; i < lastArr.length; i++) {
    if (lastArr[i] === '##') {
      count++;
    }
  }
  return count;
}

const arr = [
  ["     ##         "],
  ["##   ##        ##"],
  ["##   ##   ##   ##"],
  ["##   ##   ##   ##"]
];

document.getElementById('ans').textContent = countTowers(arr);