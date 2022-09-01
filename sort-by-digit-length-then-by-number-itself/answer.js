digitSort = nums => {
  // create arr of string nums
  const strNums = nums.map(String);
  // sort strNums by length
  strNums.sort((a,b) => b.length - a.length);
  let lenGrped = [];
  let sub = [strNums[0]];
  // array of subarrays that have elements the same length
  for (let i = 1; i < strNums.length; i++) {
    if (strNums[i].length < strNums[i-1].length) {
      lenGrped.push(sub);
      sub = [strNums[i]];
    }
    if (strNums[i].length === strNums[i-1].length)
      sub.push(strNums[i]);
    if (i === strNums.length - 1)
      lenGrped.push(sub);
  }
  // sort the elements of the same length
  for (let i = 0; i < lenGrped.length; i++) {
    lenGrped[i].sort((a,b) => a - b);
  }
  return JSON.stringify(lenGrped.flat().map(Number));
}

const nums = [53219, 3772, 564, 32, 1];

document.getElementById('ans').textContent = digitSort(nums);