sameLength = str => {
  if (str.length < 2) {
    return false;
  }
  let priorLen = 0;
  let newStr = "";
  let firstBlock = true;
  for (let i = 0; i < str.length; i++) {
    console.log('i: ', i)
    if (str[i] === newStr[0] || i === 0) {
      console.log('inside building new string')
      newStr += str[i];
      console.log('newStr: ', newStr)
    }
    else if (firstBlock) {
      console.log('inside first block')
      firstBlock = false;
      priorLen = newStr.length;
      newStr = str[i];
      console.log('first Block newStr: ', newStr)
      console.log('first Block priorlength: ', priorLen)
    }
    else {
      if (priorLen !== newStr.length) {
        console.log('failure')       
        return false;
      }
      priorLen = newStr.length;
      newStr = str[i];
      console.log('newStr: ', newStr)
      console.log('priorLen: ', priorLen)
    }
  }
  return true;
}

const str = '10101110001100';

document.getElementById('ans').textContent = sameLength(str);