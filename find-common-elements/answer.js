const commonElements = (arr1, arr2) => {
  let shorter, longer;
  const repeats = [];
  // assign shortest arr to shortest
  if (arr2.length > arr1.length) {
    shorter = arr1;
    longer = arr2;
  }
  else {
    shorter = arr2;
    longer = arr1;
  }
  // go element by element through 
  //  shortest array
  for (let i = 0; i < shorter.length; i++) {
    // longer array includes element in shorter
    // array, add that element to repeats list
    if (longer.includes(shorter[i]))
      repeats.push(shorter[i]);
  }
  return JSON.stringify(repeats);
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 12, 13, 15];

document.getElementById('ans').textContent = commonElements(arr1, arr2);