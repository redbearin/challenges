makeHappy = str => {
  const strArr = str.split('');
  for (let i = 1; i < strArr.length; i++) {
    if ((strArr[i-1] === ':' || 
         strArr[i-1] === '8' || 
         strArr[i-1] === 'x' || 
         strArr[i-1] === ';') && 
      strArr[i] === '(') {
      strArr[i] = ')';
    }
  }
  return strArr.join('');
}

const str = "I was hungry 8)";

document.getElementById('ans').textContent = makeHappy(str);