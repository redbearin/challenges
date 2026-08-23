toCamelCase = str => {
  let strArr;
  str.includes('_')?
    strArr = str.split('_'):
    strArr = str.split('-');
 
  let newStr = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    newStr += strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return newStr;
}

const str = "The_Stealth_Warrior";

document.getElementById('ans').textContent = toCamelCase(str);