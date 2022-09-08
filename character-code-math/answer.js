calc = ltrs => {
  let numStr = '';
  // create a number string of codes
  for (let i = 0; i < ltrs.length; i++) {
    numStr += ltrs.charCodeAt(i);
  }
  // string includes a 7
  if (numStr.includes('7')) {
    // replace each 7 with a 1
    let numStrArr = numStr.split('');
    for (let i = 0; i < numStrArr.length; i++) {
      if (numStrArr[i]==='7')
        numStrArr[i] = '1';
    }
    // build a new string after digit replacement
    let numStr2;
    numStr2 = numStrArr.join('');
    let numStrSum = 0;
    let numStr2Sum = 0;
    // add the digits together in the two strings
    for (let i = 0; i < numStr.length; i++) {
      numStrSum += +numStr[i];
      numStr2Sum += +numStr2[i];
    }
    // return the difference
    return numStrSum - numStr2Sum;
  }
  else
    return 0;
}

const ltrs =  "ifkhchlhfde";

document.getElementById('ans').textContent = calc(ltrs);