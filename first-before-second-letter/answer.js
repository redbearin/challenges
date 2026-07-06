firstBeforeSecond = (str, first, second) => {
  let ctFirst = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === first) {
      ctFirst++;
    }
    if (str[i] === second) {
      if (ctFirst) {
        return false;
      }
    }
  }
  return true;
}

const str = "happy birthday";
const first = "a";
const second = "y"

document.getElementById('ans').textContent = firstBeforeSecond(str, first, second);