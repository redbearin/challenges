convertCartesian = (arr1, arr2) => {
  let sub;
  const arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push([arr1[i], arr2[i]])
  }
  return JSON.stringify(arr);
}

const arr1 = [1, 5, 3, 3, 4];
const arr2 = [5, 8, 9, 1, 0];

document.getElementById('ans').textContent = convertCartesian(arr1, arr2);