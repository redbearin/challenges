swapTwo = str => {
  const strArr = str.split('');
  console.log(strArr)
  let temp1, temp2;
  // go last element of quad by last element of quad
  // thru the array
  for (let i = 3; i < strArr.length; i += 4) {
    // save the the first two elements in quad
    temp1 = strArr[i-3];
    temp2 = strArr[i-2];
    // copy 3rd element of quad to 1st element of quad
    // copy 4th element of quad to 2nd element of quad
    strArr[i-3] = strArr[i-1];
    strArr[i-2] = strArr[i];
    // copy 1st element of quad to 3rd element of quad
    // copy 2nd element of quad to 4th element of quad
    strArr[i-1] = temp1;
    strArr[i] = temp2;
  }
  return strArr.join('');
}

const str = "FFGGHHI";
document.getElementById('ans').textContent = swapTwo(str);