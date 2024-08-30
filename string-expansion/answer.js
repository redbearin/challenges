const stringExpansion = str => {
  const charArr = [];
  const numArr = [];
  let sub = str[0];
  // go element by element through str
  for (let i = 1; i < str.length; i++) {
    // prior and current element are 
    // same type
    if (isNaN(str[i]) === isNaN(str[i-1]) ||
        !isNaN(str[i]) === !isNaN(str[i-1]))
      sub += str[i];
  
    // prior element char and current ele num
    else if (!isNaN(str[i]) && isNaN(str[i - 1])) {
      charArr.push(sub);
      sub = str[i];
    }
    // prior element num and current ele char
    else {
      numArr.push(sub);
      sub = str[i];
    }

    // last element
    if (i === str.length - 1) {
      // element char
      if (isNaN(str[i]))
        charArr.push(sub);
      // element num
      else  
        numArr.push(sub)
    } 
  }
  // no numbers
  if (!numArr.length) 
    return str;
  // clean-up num array
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = numArr[i].slice(-1);
  }

  // build new string
  // initialize newStr
  let newStr = '';
  // go through each element in charArr
  for (let i = 0; i < charArr.length; i++) {
    // go letter by letter through each
    // element in charArr
    for (let j = 0; j < charArr[i].length; j++) {
      // repeat based on count in numArr
      for (let k = 0; k < +numArr[i]; k++) {
        console.log(charArr[i][j])
        newStr += charArr[i][j];
      }
    }  
  }
  return newStr;
};

const str = 'airforce';

document.getElementById('ans').textContent = stringExpansion(str);