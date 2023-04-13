uniqueAbbrev = (abbrevs, words) => {
  let len;
  let count;
  for (let i = 0; i < abbrevs.length; i++) {
    len = abbrevs[i].length;
    count = 0;
    for (let j = 0; j < words.length; j++) {
      if (words[j].slice(0, len) === abbrevs[i]) {
        count++;
        if (count > 1) {
          return false;
        }
      }
    }
  }
  return true;
}

const abbrevs = ["ho", "h", "ha"];
const words = ["house", "hope", "happy"];

document.getElementById('ans').textContent = uniqueAbbrev(abbrevs, words);
