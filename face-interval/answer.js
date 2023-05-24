faceInterval = arr => {
  if (!Array.isArray(arr)) {
    return ":/";
  }
  arr.sort((a,b) => a-b);
  if (arr.includes(arr[arr.length - 1] - arr[0])) {
    return ":)"
  }
  return ":(";
}

const arr = [1, 2, 5, 8, 3, 9];

document.getElementById('ans').textContent = faceInterval(arr);