stringFactor = arr => {
  const counts = {};
  arr.forEach(ele => {counts[ele] = (counts[ele] || 0) + 1; });
  let ops = [];
  for (key in counts) {
    if (counts[key] === 1) {
      ops.push(key);
    }
    else {
      ops.push(key + '^' + counts[key]);
    }
  }
  return ops.join(' x ');
}

const arr = [2, 3, 3];

document.getElementById('ans').textContent = stringFactor(arr);