pigLatinSentence = str => {
  const strArr = str.split(' ');
  let idx;
  for (let i = 0; i < strArr.length; i++) {
    if(/([aeiouAEIOU])/.test(strArr[i][0])) {
      strArr[i] = strArr[i] + 'way';
    }
    else {
      console.log('not first letter')
      for (let j = 0; j < strArr[i].length; j++) {
        if (/([aeiouAEIOU])/.test(strArr[i][j])) {
          idx = j;
          strArr[i] = strArr[i].slice(idx) + strArr[i].slice(0,idx) + 'ay'; 
          break;
        }
      }
    }
  }
  return strArr.join(' ');
}

const str = "wall street journal";

document.getElementById('ans').textContent = pigLatinSentence(str);