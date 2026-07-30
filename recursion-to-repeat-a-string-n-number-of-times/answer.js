repetition = (str, rep) => {
  if (rep === 1) {
    return str;
  }
  rep--;
  return str + repetition(str, rep);
}

const str = "ab";
const rep = 3;

document.getElementById('ans').textContent = repetition(str, rep);