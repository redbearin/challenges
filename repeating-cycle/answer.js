isRepeatingCycle = (arr, repeat) => {
  // build the base unit for matching
  let base = [];
  for (let i = 0; i < repeat; i++) {
    base.push(arr[i]);
  }
  let baseIdx = 0;
  for (let i = repeat; i < arr.length; i += repeat) {
    for (let j = i; j < i + repeat; j++) {
      // beyond end of array
      if (!arr[j]) 
        break;
      // number in arr does not match number in base
      if (arr[j] !== base[baseIdx]) 
        return false;
      // move to next index in base
      baseIdx++;
    }
    // reset base index
    baseIdx = 0;
  }
  return true;
}

const arr = [1, 1, 1, 1];
const repeat = 3;

document.getElementById('ans').textContent = isRepeatingCycle(arr,repeat);