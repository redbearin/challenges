nonstopHotspot = str => {
  let count = 0;
  let pIdx = str.indexOf('P');
  for (let i = pIdx + 1; i < str.length; i++) {
    if (str[i] === '#') {
      break;
    }
    if (str[i] === '*') {
      count++;
    }
  }
  for (let i = pIdx - 1; i >= 0 ; i--) {
    if (str[i] === '#') {
      break;
    }
    if (str[i] === '*') {
      count++;
    }
  }
  return count;
}

const str = 'P       #';

document.getElementById('ans').textContent = nonstopHotspot(str);