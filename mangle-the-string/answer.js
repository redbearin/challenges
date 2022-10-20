mangle = str => {
  let newStr = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newLtr;
  let newCode;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ||
        str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
          newCode = (str.charCodeAt(i) + 1);
      if (newCode === 91 || newCode === 123) 
        newCode = newCode - 26;
      newLtr = String.fromCharCode(newCode);
      if (vowels.includes(newLtr))
        newLtr = newLtr.toUpperCase();
      newStr += newLtr;
    }
    else
      newStr += str[i];
  }
  return newStr;
}

const str = "Fun times!";

document.getElementById('ans').textContent = mangle(str);