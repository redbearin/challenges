arrIndex = (arr, idx) => {
  const flatArr = arr.flat();
  console.log(flatArr)
  let str = '';
  for (let i = 0; i < idx.length; i++) {
    str += flatArr[idx[i]-1];
  }
  return str;
}

const arr = [['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']];
const idx = [1, 3, 5, 8];
document.getElementById('ans').textContent = arrIndex(arr, idx);