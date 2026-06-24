getFrame = (w, h, sym) => {
  if (w < 3 || h < 3) {
    return 'invalid';
  }
  let sub;
  const frame = [];
  for (let i = 0; i < h; i++) {
    sub = [];
    for (let j = 0; j < w; j++) {
      if (i > 0 & i < h-1) {
        if (j === 0 || j === w - 1) {
          sub.push(sym);
        }
        else {
          sub.push(' ');
        }
      }
      else {
        sub.push(sym);
      }
    }
    frame.push(sub);
  }
  return JSON.stringify(frame);
}

const w = 4;
const h = 2;
const sym = '#';

document.getElementById('ans').textContent = getFrame(w, h, sym);