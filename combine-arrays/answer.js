combineArrays = (arr1, arr2, arr3) => {
  const arrs = [arr1, arr2, arr3]
  const arrSorted = [arr1, arr2, arr3].sort((a, b) => b.length - a.length);
  const reordered = [];
  for (let i = 0; i < arrSorted[0].length; i++) {
    let sub = [];
    for (let j = 0; j < arrs.length; j++) {
      if (arrs[j][i] !== undefined) {
        sub.push(arrs[j][i])
      }
      else {
        sub.push("*");
      }
    }
    reordered.push(sub);
  }
  return JSON.stringify(reordered);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

document.getElementById('ans').textContent = combineArrays(arr1, arr2, arr3);

