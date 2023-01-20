const warpTunnel = (mtx, n) => {
  // length of each subarray
  const subLen = mtx[0].length;
  // subarrays removed
  const flattened = mtx.flat();
  // initialize the amount to shift
  let shift;
  // n smaller than or same as 
  // length of flattened array
  if (n <= flattened.length)
    shift = n;
  // n bigger than lenght of 
  // flattened array
  else 
    shift = n % flattened.length;
  
  // shift is the same as flattened
  // array length
  if (shift === flattened.length)
    return JSON.stringify(mtx);

  // remove number of elements 
  // equal to shift from the end
  let remFrmEnd = flattened.splice(-shift);
  // add those elements to beg of array
  // to create a reordered array
  let reordArr = remFrmEnd.concat(flattened);

  let final = [];
  let sub;
  // rebuild the array of subarrays
  // using the initial subarray size
  for (let i = 0; i < reordArr.length; i += subLen) {
    sub = [];
    for (let j = i; j < i + subLen; j++) {
      sub.push(reordArr[j]);
    }
    final.push(sub);
  }
  return JSON.stringify(final);
};

const mtx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const n = 18;

document.getElementById('ans').textContent = warpTunnel (mtx, n);