scrambled = (words, mask) => {
  let flag;
  const matches = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === mask.length) {
      for (let j = 0; j < words[i].length; j++) {
        flag = false;
        if (mask[j] !== '*') {
          if (words[i][j] !== mask[j]) {
            flag = true;
            break;
          }
        }
      }
      if (!flag) {
        matches.push(words[i]);
      }
    }
  }
  return JSON.stringify(matches);
}

const words = ["cee","dee","eer","erd","ere","red","ree","cede","cere","cree","deer","dere","dree","rede","reed","ceder","cedre","cered","creed","decree","recede"];

const mask = "*re**";

document.getElementById('ans').textContent = scrambled(words, mask);