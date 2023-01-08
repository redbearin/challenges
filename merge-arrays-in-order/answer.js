mergeSort = (arr1, arr2) => {
  // determine if asc or des
  // asc
  if (arr1[1] > arr1[0])
    arr2.sort((a,b) => a - b);
  // des
  else
    arr2.sort((a,b) => b - a);
  // combine two arrays after second sortedd
  return JSON.stringify(arr1.concat(arr2));
}

const arr1 = [120, 180, 200];
const arr2 = [190, 175, 130];
document.getElementById('ans').textContent  = mergeSort(arr1, arr2);