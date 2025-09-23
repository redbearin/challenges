spaceMessage = str => {
  let modStr = '';
  let bracketFlag = false;
  let count, subStr, hold, holdCount;
  let i = 0;
  while (i < str.length) {
    if (str[i] === '[') { 
      if (bracketFlag === true) {
        hold = subStr;
        holdCount = count;
      } 
      bracketFlag = true;
      count = str[i + 1];
      i += 2;
      subStr = '';
    }
    else {
      if (str[i] === ']') { 
        if (hold.length) {
          for (let j = 0; j < count; j++) {
            hold += subStr;
          }
        }
        else {
          for (let j = 0; j < holdCount; j++) {
            modStr += hold;
            bracketFlag = false;
          }
        }
      }
      else if (bracketFlag) {
        subStr += str[i];
      }
      else {
        modStr += str[i];
      }
      i++;
    }
  }
  return modStr;
}

const str = "AB[2C[2EF]G]";

document.getElementById('ans').textContent = spaceMessage(str);