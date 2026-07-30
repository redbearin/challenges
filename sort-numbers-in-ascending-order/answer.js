sortNumsAscending = arr => {
  return arr === null || !arr.length?
  JSON.stringify([]):
  JSON.stringify(arr.sort((a, b) => a - b));
}

const arr = [1, 2, 10, 50, 5];

document.getElementById('ans').textContent = sortNumsAscending(arr);