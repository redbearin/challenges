inBox = arr => {
  let star = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('*')) {
      if (arr[i][0] === '*' || arr[i][arr[i].length - 1] === '*') {
        return false;
      }
      star = true;
    }
  }
  if (star) {
    return true;
  }
  return false;
}

const arr = [
  "###",
  "#*#",
  "###"
];

document.getElementById('ans').textContent = inBox(arr);

