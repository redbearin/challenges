charAtPos = (input, pos) => {
  let beg;
  pos === 'odd'?
    beg = input.length - 1:
    beg = input.length - 2;

  posArr = [];
  for (let i = beg; i >= 0; i -= 2) {
    posArr.unshift(input[i]);
  }
  if (typeof input === 'string') {
    return posArr.join('');
  }
  return posArr;
}

const input = [2, 4, 6, 8, 10];
const pos = "even";

document.getElementById('ans').textContent = charAtPos(input, pos);