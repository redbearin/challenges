incrementString = str => {
  // break into character part and number part
  let chars, num;
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i])) {
      chars = str.slice(0, i + 1);
      num = str.slice(i + 1);
      break;
    }
  }

  // no number
  if(!num) {
    num = '0';
  }

  // complete addition
  let carry = 0;
  let colNum = 0;
  let strNumPlus1 = '';
  for (let i = num.length - 1; i >= 0; i--) {
    colNum = +num[i] + carry;
    if (i === num.length - 1) {
      colNum++;      
    }
    if (colNum > 9) {
      carry = Math.floor(colNum/10);
      strNumPlus1 = (colNum % 10).toString() + strNumPlus1;
    }
    else {
      strNumPlus1 = colNum.toString() + strNumPlus1;
      carry = 0;
    }
  }

  return chars + strNumPlus1;
}

const str = "foo";

document.getElementById('ans').textContent = incrementString(str);
