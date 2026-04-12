mergeArrays = (arr1, arr2) => {
  const comb = [];
  const len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    comb.push(arr1[i], arr2[i]);
  }
  console.log(...arr2.slice(len))
  comb.push(...arr1.slice(len), ...arr2.slice(len));
  return comb;
}

const arr1 = [1, 2, 3]; 
const arr2 = ["a", "b", "c", "d", "e", "f"];

document.getElementById('ans').textContent = mergeArrays(arr1, arr2);