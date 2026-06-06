sortIt = arr => {
  return JSON.stringify(arr.sort((a,b) => a-b));
}

const arr = [[3], 4, [2], [5], 1, 6];

document.getElementById('ans').textContent = sortIt(arr);