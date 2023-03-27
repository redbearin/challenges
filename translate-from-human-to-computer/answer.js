replaceNums = str => {
  let finalStr = '';
  let num = '';
  let flag = false;
  for (let i =0; i < str.length; i++) {
    // a digit
    if (/[0-9]/.test(str[i])) {
      // last item in the string
      if(i === str.length - 1) {
        // add the digit to num
        num += str[i];
        // add the complete num to the finalStr string
        finalStr += +num.toString(2);
      }
      // num is empty
      if (!num)
        flag = true;
      // add digit to num
      num += str[i];
    }
    // not a digit
    else {
      // last element was a digit
      if (flag) {
        // convert string num to numeric num
        let numericNum = +num;
        // add the binary num to string along with current element
        finalStr += numericNum.toString(2) + str[i];
        // remove digit flag
        flag = false;
        // reset num to empty string
        num = '';
      }
      // last element was not a digit
      else
        finalStr += str[i];
    }  
  }
  return finalStr;
}

const str = "I have 2 sheep.";

document.getElementById('ans').textContent = replaceNums(str);