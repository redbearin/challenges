longestWord = str => {
  const strArr = str.split(' ');
  let longest = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longest.length) {
      longest = strArr[i];
    }
  }
  return longest;
}

const str = "Hello darkness my old friend";

document.getElementById('ans').textContent = longestWord(str);