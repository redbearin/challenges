progressBar = (sym, per) => {
  const rem = 100 - per;
  const front = "|" + sym.repeat(per/10) + " ".repeat(rem/10) + "| "
  if (per === 100) {
    return front + "Completed!"
  }
  return front + "Progress: " + per + "%";
}

const sym = "=";
const per = 40;

document.getElementById('ans').textContent = progressBar(sym, per);