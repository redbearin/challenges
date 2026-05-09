tallestSkyscraper = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(1)) {
      return arr.length - i;
    }
  }
  return 0;
}

const arr = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [1, 1, 1, 1]
];

document.getElementById('ans').textContent = tallestSkyscraper(arr);