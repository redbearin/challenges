digitalVowelBan = (num, ltr) => {
  const matches = {
    0: ['e', 'o'], 1: ['e', 'o'], 2: ['o'], 3: ['e'], 4: ['o','u'], 5: ['e','i'], 6: ['i'], 7: ['e'], 8: ['e','i'], 9: ['e','i']
  }
  const strNum = num.toString();
  let newStr = '';
  for (let i = 0; i < strNum.length; i++) {
    if (!matches[strNum[i]].includes(ltr)) {
      newStr += strNum[i];
    }
  }
  return !newStr.length ?
  "Banned Number" :
  +newStr;
}

const num = 143;
const ltr = "o"

document.getElementById('ans').textContent = digitalVowelBan(num, ltr);