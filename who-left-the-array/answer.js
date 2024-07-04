missing = (arr1, arr2) => {
  let idx;
  for (let i = 0; i < arr1.length; i++) {
    idx = arr2.indexOf(arr1[i]);
    if (idx === -1) {
      return arr1[i];
    }
    else {
      arr2[idx] = '*';
    }
  }
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [1, 3, 4, 5, 6, 7, 8];

document.getElementById('ans').textContent = 
missing(arr1, arr2);
