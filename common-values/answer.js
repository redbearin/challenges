commonValues = (arr1, arr2) => {
  const arr2Set = new Set(arr2);
  const dups = new Set();
  for (const ele of arr1) {
    if (arr2Set.has(ele)) {
      dups.add(ele);
    }
  }
  return JSON.stringify([...dups]);
}

const arr1 = [1, 4, 3, 4];
const arr2 = [3, 4, 5, 6];

document.getElementById('ans').textContent = commonValues(arr1, arr2);
