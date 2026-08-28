isSubset = (sub, arr) => {
  for (let i = 0; i < sub.length; i++) {
    if (!arr.includes(sub[i])) {
      return false;
    }
  }
  return true;
}

const sub = [1, 2];
const arr = [3, 5, 9, 1];

document.getElementById('ans').textContent = isSubset(sub, arr);