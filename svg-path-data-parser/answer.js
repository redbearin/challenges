pathDataParser = str => {
  const strArr = str.split(' ');
  let newStr = '';
  let subStr = '';
  for (let i = 0; i < strArr.length; i++) {
    if (/[A-Z][a-z]/.test(strArr[i]) {
      if (i === 0)
        newStr += '{command: ' + strArr[i] + ', ';
      else {
        newStr += 
      }
      if (/[0-9]/.test(strArr[i])
          
    }
      
      newStr += {command: 'M'
  }
}

const str = "M 0 0";

document.getElementById('ans').textContent = pathDataParser(str);