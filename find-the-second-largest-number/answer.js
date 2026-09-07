secondLargest = arr => {
  const noDups = [...new Set(arr)];
  const largest = Math.max(...noDups);
  noDups.splice(noDups.indexOf(largest), 1);
  let sec = -Infinity;
  for (let i = 0; i < noDups.length; i++) {
    if (noDups[i] > sec) {
      sec = noDups[i];
    }
  }
  if (sec === -Infinity) {
    return null;
  }
  return sec;
}

const arr = [];

document.getElementById('ans').textContent = secondLargest(arr);