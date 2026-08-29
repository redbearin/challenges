hackerSpeak = str => {
  const replacements = {a: 4, e: 3, i: 1, o: 0, s: 5};
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    replacements[str[i]] === undefined ?
      newStr += str[i] :
      newStr += replacements[str[i]];
  }
  return newStr;
}
const str = "programming is fun";

document.getElementById('ans').textContent = hackerSpeak(str);