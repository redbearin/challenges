const firstDuplicate = (arr) => {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  return "no repeats";
};

const arr = [2, 1, 3, 5, 3, 2];

document.getElementById('ans').textContent = firstDuplicate(arr);
