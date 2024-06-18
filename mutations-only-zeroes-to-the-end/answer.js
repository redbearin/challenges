const zeroesToEnd = arr => {
  // number of zeroes
  let zeroCount = 0;
  // go backward thru array and remove zeroes
  // note: splice mutates the array
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      zeroCount++;
      arr.splice(i, 1);
    }
  }
  // add the zeroes back at the 
  // end of the array
  // note: push mutates the array
  for (let i = 0; i < zeroCount; i++) {
    arr.push(0);
  }
  return JSON.stringify(arr);
};
const arr = [0, 0];
document.getElementById('ans').textContent = zeroesToEnd(arr);
