sortByLength = arr => {
  return arr.sort((a,b) => a.length - b.length);
}

const arr = ["apple", "pie", "shortcake"];

document.getElementById('ans').textContent = sortByLength(arr);