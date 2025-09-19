numberGroups = (arr1, arr2, arr3) => {
  arr1 = [...new Set(arr1)];
  arr2 = [...new Set(arr2)];
  arr3 = [...new Set(arr3)];
  const obj = {};
  const moreThan1 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      obj[arr1[i]] += 1;
    }
    else 
      obj[arr1[i]] = 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      obj[arr2[i]] += 1;
    }
    else 
      obj[arr2[i]] = 1;
  }
  for (let i = 0; i < arr3.length; i++) {
    if (obj[arr3[i]]) {
      obj[arr3[i]] += 1;
    }
    else 
      obj[arr3[i]] = 1;
  }
  for (key in obj) {
    if (obj[key] > 1) {
      moreThan1.push(+key)
    }
  }
  return JSON.stringify(moreThan1.sort((a,b) => a - b));
}

const arr1 = [3, 8, 8, 1, 1];
const arr2 = [9, 1, 1, 9, 9];
const arr3 = [10, 7, 6, 6, 3];

document.getElementById('ans').textContent = numberGroups(arr1, arr2, arr3);