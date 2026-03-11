removeDups = arr => {
  return JSON.stringify([... new Set(arr)]);
}

const arr = ["The", "big", "cat"];

document.getElementById('ans').textContent = removeDups(arr);