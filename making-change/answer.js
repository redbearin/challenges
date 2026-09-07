makeChange = c => {
  let breakdown = {"q": 0, "d": 0, "n": 0, "p": 0 };
  while (c > 0) { 
    if (c >= 25) {
      breakdown.q += Math.floor(c/25);
      c -= 25 * (Math.floor(c/25));
    }
    else if (c >= 10) {
      breakdown.d += 1;
      c -= 10; 
    }
    else if (c >= 5) {
      breakdown.n += 1;
      c -= 5; 
    }
    else {
      breakdown.p += 1;
      c -= 1; 
    }
  }
  return JSON.stringify(breakdown);
}
const c = 92;

document.getElementById('ans').textContent = makeChange(c);