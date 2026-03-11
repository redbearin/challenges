findRepeating = str => {
  if (str === '') {
    return JSON.stringify([]);
  }
  if (str.length === 1) {
    return JSON.stringify([[str[0],0, 0, 1]]);
  }
  let begIdx = 0;
  const final = [];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i-1]) {
      final.push([str[i - 1], begIdx, i-1, i-1 - begIdx + 1])
      begIdx = i;
      if (i === str.length - 1) {
        final.push([str[i], i, i, 1]);
        return JSON.stringify(final);
      } 
    }
    if (i === str.length - 1) {
      final.push([str[i], begIdx, i, i - begIdx + 1]);
      return JSON.stringify(final);
    }
  }
}

const str = "1337";

document.getElementById('ans').textContent = findRepeating(str);