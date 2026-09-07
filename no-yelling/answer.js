noYelling = str => {
  let idx = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== str[i-1]) {
      idx = i;
      break;
    }
  }
  return str.slice(0, idx + 1);
}

const str = "What went wrong?????????";

document.getElementById('ans').textContent = noYelling(str);