makeRug = (h, w, sym) => {
  const rug = [];
  let str;
  for (let i = 0; i < 3; i++) {
    str = '';
    for (let j = 0; j < 5; j++) {
      str += sym;
    }
    rug.push(str);
  }
  return JSON.stringify(rug);
}

const h = 3;
const w = 5;
const sym = '$';

document.getElementById('ans').textContent = makeRug(h, w, sym);