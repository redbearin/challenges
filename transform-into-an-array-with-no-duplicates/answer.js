set = arr => {
  return [... new Set(arr)];
}

const arr = [1, 3, 3, 5, 5, 5];

document.getElementById('ans').textContent = set(arr);