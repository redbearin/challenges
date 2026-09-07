scaleTip = arr => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    left += arr[i];
    right += arr[arr.length - 1 - i];
  }
  if (left > right)
    return "left";
  if (right > left)
    return "right";
  else 
    return "balanced";
}

const arr = [0, 0, "I", 1, 1];

document.getElementById('ans').textContent = scaleTip(arr);