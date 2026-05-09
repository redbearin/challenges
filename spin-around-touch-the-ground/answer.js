spinAround = turns => {
  let count = 0;
  for (let i = 0; i < turns.length; i++) {
    turns[i] === 'right' ?
    count++ :
    count--;
  }
  return Math.floor(Math.abs(count/4));
}

const turns = ["left", "right", "left", "right"]

document.getElementById('ans').textContent = spinAround(turns);