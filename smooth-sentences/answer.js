isSmooth = sentence => {
  const sentenceArr = sentence.split(' ');
  for (let i = 1; i < sentenceArr.length; i++) {
    if (sentenceArr[i-1][sentenceArr[i-1].length - 1].toLowerCase() !== sentenceArr[i][0].toLowerCase())
      return false;
  }
  return true;
}

const sentence = "She eats super righteously";

document.getElementById('ans').textContent = isSmooth(sentence);