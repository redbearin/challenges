wiggleString = str => {
  const arr = [];
  for (let i = 0; i <= str.length; i++) {
    arr.push(' '.repeat(i) + str);
  }
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(' '.repeat(i) + str);
  }
  return arr;
}

const str = "hello";

document.getElementById('ans').textContent = wiggleString(str);