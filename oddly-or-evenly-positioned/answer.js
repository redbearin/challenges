charAtPos = (input, position) => {
  if (position === 'even')
    n = 1;
  else
    n = 0;
  // array input
  if (Array.isArray(input)) {
    const posArr = [];
    for (let i = n; i < input.length; i += 2) {
      posArr.push(input[i]);
    }
    return JSON.stringify(posArr);
  }
  // string input
  else {
    let posStr = '';
    for (let i = n; i < input.length; i += 2) {
      posStr += input[i];
    }
    return posStr;
  }
}

const input = ["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"];
const position = 'odd';

document.getElementById('ans').textContent = charAtPos(input, position);