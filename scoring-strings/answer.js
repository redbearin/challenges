scoreIt = str => {
  str = str.replace(/([a-zA-Z])/g, '');
  const strArr = str.split(/([()])/);
  let count = 0;
  let flag = false;
  let num = '';
  let sum = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (/([0-9])/.test(strArr[i])) {
      num += strArr[i];
      flag = true;
    }
    else if (strArr[i] === '(' || strArr[i] === ')'){
      if (flag) {
        sum += +num * count;
        flag = false;
      }
      strArr[i] === '(' ?
        count++ :
        count--;
      num = '';
    }
  }
  return sum;
}

const str = "5(abc8de)";

document.getElementById('ans').textContent = scoreIt(str);