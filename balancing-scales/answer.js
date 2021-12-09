scaleTip = arr => {
  const left = arr.slice(0,arr.indexOf('I'));
  const right = arr.slice(arr.indexOf('I') + 1);
  let leftTtl = 0;
  let rightTtl = 0;
  for (let i = 0; i < left.length; i++) {
    leftTtl += left[i];
  }
  for (let i = 0; i < right.length; i++) {
    rightTtl += right[i];
  }
  if (leftTtl > rightTtl)
    return 'left';
  if (leftTtl < rightTtl)
    return 'right';
  return 'balanced';
};

const arr = [1, 2, 3, "I", 4, 0, 0];

document.getElementById('ans').textContent = scaleTip(arr);