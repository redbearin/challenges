fullKeyName = str => {
  const strArr = str.split(' ');
  let key;
  strArr[strArr.length - 1].charCodeAt(0) > 64 && 
         strArr[strArr.length - 1].charCodeAt(0) < 91 ?
    key = ' major' :
    key = ' minor';
  strArr[strArr.length - 1] = strArr[strArr.length - 1][0].toUpperCase() + strArr[strArr.length - 1].slice(1) + key;
  return strArr.join(' ');
}

const str = "Prelude in C";

document.getElementById('ans').textContent = fullKeyName(str);