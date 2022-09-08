const uncensor = (str, vowels) => {
  let count = 0;
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '*') {
      strArr[i] = vowels[count];
      count++;
    }
  }
  return strArr.join('');
}

const str = "*PP*RC*S*";
const vowels = "UEAE";

document.getElementById('ans').textContent = uncensor(str, vowels);