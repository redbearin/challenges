circularShift = (arr1, arr2, n) => {
  // correct for n > array length
   if (Math.abs(n) > arr1.length)
      n = n % arr1.length
  // check if shifted arr1 is the same as arr1
  if ((arr1.slice(n)).concat(arr1.slice(0,n)).toString() === arr2.toString())
    return true;
  return false;
}
const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [5, 0, 1, 2, 3, 4];
const n = -1; 
document.getElementById('ans').textContent = circularShift(arr1, arr2, n);