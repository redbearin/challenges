getIndices = (arr, ele) => {
  const arrIdx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      arrIdx.push(i);
    }
  }
  return JSON.stringify(arrIdx);
}

const arr = ["a", "a", "b", "a", "b", "a"];
const ele = "a";

document.getElementById('ans').textContent = getIndices(arr, ele);