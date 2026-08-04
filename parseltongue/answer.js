isParselTongue = str => {
  str = str.toLowerCase();
  const strArr = str.split(' ');
  let flag = false;
  for (let i = 0; i < strArr.length; i++) { 
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i][j] === 's' && 
          strArr[i][j - 1] === 's' || 
          strArr[i][j + 1] === 's') {
          break;
      }
      if (strArr[i][j] === 's') {
        flag = true;
      }
    }
    if (flag) {
      return false;
    }
    flag = false;
    
const str = "She ssselects to eat that apple. ";

document.getElementById('ans').textContent = isParselTongue(str);