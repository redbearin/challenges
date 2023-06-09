countdown = (topNum, phrase) => {
  let sequence = '';
  for (let i = topNum; i > 0; i--) {
    sequence += i + '. ';
  }
  return sequence + phrase.toUpperCase() + '!';
}
const topNum = 5;
const phrase = "FIRE";

document.getElementById('ans').textContent = countdown(topNum, phrase);