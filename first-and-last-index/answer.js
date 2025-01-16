charIndex = (str, ltr) => {
  const idx = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ltr) {
      idx.push(i);
      break;
    }
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ltr) {
      idx.push(i);
      break;
    }
  }
  if (idx.length) {
    return JSON.stringify(idx);
  }
  return undefined;
}

const str = "hello";
const ltr = "l";

document.getElementById('ans').textContent = charIndex(str, ltr);