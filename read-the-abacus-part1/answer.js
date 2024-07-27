schoty = frame => {
  let strNum = '';
  for (let i = 0; i < frame.length; i++) {
    strNum += frame[i].split('---')[0].length
  }
  return +strNum;
}

const frame = [
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "OOO---OOOOOOO",
  "O---OOOOOOOOO",
  "OOOOOOOOO---O",
  "OO---OOOOOOOO"
];

document.getElementById('ans').textContent = schoty(frame);