replaceThe = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'the') {
      vowels.includes(strArr[i + 1][0]) ?
      strArr[i] = 'an':
      strArr[i] = 'a';
    }
  }
  return strArr.join(' ');
}

const str = "the dog and the envelope";

document.getElementById('ans').textContent = replaceThe(str);