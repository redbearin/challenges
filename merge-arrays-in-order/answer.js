mergeSort = (arr1, arr2) => {
  return arr1[0] < arr1[1] ?
    JSON.stringify(arr1.concat(arr2).sort((a,b) => a-b)):
    JSON.stringify(arr1.concat(arr2).sort((a,b) => b-a));
}

const arr1 = [1, 2, 3];
const arr2 = [5, 4, 6];

document.getElementById('ans').textContent = mergeSort(arr1, arr2);