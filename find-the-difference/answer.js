findTheDifference = (s, t) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i])
      return t[i];
  }
  return t[t.length - 1];
}

const s = "ae";
const t = "aea";

document.getElementById('ans').textContent = findTheDifference(s, t);