trimmedAverages = arr => {
  arr.sort((a,b) => a - b);
  const trimmed = arr.slice(1, -1);
  return Math.round(trimmed.reduce((acc, ele) => acc + ele, 0))/trimmed.length;
}

const arr = [10, 25, 5, 15, 20];

document.getElementById('ans').textContent = trimmedAverages(arr);