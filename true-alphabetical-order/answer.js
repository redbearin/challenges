trueAlphabetic = str => {
  let newStr  = '';
  let count = 0;
  const noSpcSorted = str.replaceAll(" ", "").split('').sort();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += " ";
    }
    else {
      newStr += noSpcSorted[count];
      count++;
    }
  }
  return newStr;
}

const str = "have a nice day";



document.getElementById('ans').textContent = trueAlphabetic(str);