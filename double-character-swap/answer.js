doubleSwap = (str, c1, c2) => {
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === c1) {
      strArr[i] = c2;
    }
    else if (strArr[i] === c2) {
      strArr[i] = c1;
    }
  }
  return strArr.join('');
}

const str = "aabbccc";
const c1 = "a";
const c2 = "b";

document.getElementById('ans').textContent = doubleSwap(str, c1, c2);

