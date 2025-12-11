checkerBoard = (n, el1, el2) => {
  const board = [];
  let sub;
  for (let i = 0; i < n; i++) {
    sub = [];
    for (let j = 0; j < n; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          sub.push(el1);
        }
        else {
          sub.push(el2);
        }
      }
      else {
        if (j % 2 === 0) {
          sub.push(el2);
        }
        else {
          sub.push(el1);
        }
      }
    }
    board.push(sub);
  }
  return JSON.stringify(board);
}

const n = 3;
const el1 = "A";
const el2 = "B";

document.getElementById('ans').textContent = checkerBoard(n, el1, el2);