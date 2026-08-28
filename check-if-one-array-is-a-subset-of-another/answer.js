subset = (sub, arr) => {
  for (let i = 0; i < sub.length; i++) {
    if (!arr.includes(sub[i])) {
      return false;
    }
  }
  return true;
}

const sub = [1, 3];
const arr = [1, 3, 3, 5];

document.getElementById('ans').textContent = subset(sub, arr);