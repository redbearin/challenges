tuckIn = (arr1, arr2) => {
  return JSON.stringify([arr1[0], ... arr2, arr1[1]]);
}

const arr1 = [15,150];
const arr2 = [45, 75, 35];

document.getElementById('ans').textContent = tuckIn(arr1, arr2);