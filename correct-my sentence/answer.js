correctSentences = str => {
  const trStrArr = str.trim().split(' ');
  console.log(trStrArr);
  const noSpArr = [];
  for (let i = 0; i < trStrArr.length; i++) {
    if (trStrArr[i].length)
      noSpArr.push(trStrArr[i]);
  }
  noSpArr[0] = noSpArr[0][0].toUpperCase() + noSpArr[0].slice(1);
  for (let i = 1; i < noSpArr.length; i++) {
    if (/[A-Z]/.test(noSpArr[i])) {
      noSpArr[i - 1] = noSpArr[i - 1] + '.';
    }
    if (i === noSpArr.length - 1 && noSpArr[i][noSpArr[i].length - 1] !== '.') {
      noSpArr[i] = noSpArr[i] + '.';
    }
  }
  return noSpArr.join(' ');
}

const str = " his english is not good Help him     Thank you";

document.getElementById('ans').textContent = correctSentences(str);