spelling = word => {
  const pieces = [];
  let str = '';
  for (let i = 0; i < word.length; i++) {
    str += word[i];
    pieces.push(str);
  }
  return JSON.stringify(pieces);
}

const word = "happy";

document.getElementById('ans').textContent = spelling(word);