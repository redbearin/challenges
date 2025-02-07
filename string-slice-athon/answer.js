challenge1 = s => {
  return s.slice(0, 5);
}

const s = "abcdefghijklmnopqrstuvwxyz";

document.getElementById('ans').textContent = challenge1(s);