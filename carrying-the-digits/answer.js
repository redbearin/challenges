carryDigits = (n1, n2) => {
  let carry = 0;
  let count = 0;
  let len;
  const str1 = n1.toString();
  const str2 = n2.toString();
  str1.length >= str2.length ? len = str1.length: len = str2.length;
  for (let i = len - 1; i >= 0; i--) {
    if (+str1[i] + +str2[i] + carry > 9) {
      carry = 1;
      count++;
    }
    else {
      carry = 0;
    }
  }
  return count;
}
const n1 = 671;
const n2 = 329;

document.getElementById('ans').textContent = carryDigits(n1, n2);