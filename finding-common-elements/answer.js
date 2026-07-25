commonElements = (arr1, arr2) => {
  const common = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }
  return JSON.stringify([...new Set(common)]);
}

const arr1 = [1, 2, 2, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 5];

document.getElementById('ans').textContent = commonElements(arr1, arr2);