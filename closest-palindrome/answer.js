closestPalindrome = num => {
  // intialize variables
  let newNumNegStr, 
      newNumPosStr, 
      newNumNegArr, 
      newNumPosArr, 
      newNumNegArrRev, 
      newNumPosArrRev, 
      newNumNegRevStr, 
      newNumPosRevStr;
  // increment 
  for (let i = 0; i < Infinity; i++) {
    // new num in negative direction
    // make a string
    newNumNegStr= (num - i).toString();
    // arr of digits
    newNumNegArr = newNumNegStr.split('');
    // reverse digits
    newNumNegArrRev = newNumNegArr.reverse();
    // combine reversed digits into a string
    newNumNegRevStr = newNumNegArrRev.join(''); 
    // num and reversed num same  
    if (newNumNegStr=== newNumNegRevStr) 
      return num - i;

    // new num in positive direction
    // make a string
    newNumPosStr = (num + i).toString();
    // arr of digits
    newNumPosArr = newNumPosStr.split('');
    // reverse digits
    newNumPosArrRev = newNumPosArr.reverse();
    // combine reversed digits into a string
    newNumPosRevStr = newNumPosArrRev.join('');
    // num and reversed num same  
    if (newNumPosStr === newNumPosRevStr) {
      console.log('inside positive')
      return num + i;
    }
  }
}

const num = 27;

document.getElementById('ans').textContent = closestPalindrome(num);