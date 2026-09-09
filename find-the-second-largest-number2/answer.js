secondLargest = arr => {
  const noDups = [...new Set(arr)];
  const largest = Math.max(...noDups);
  const index = noDups.indexOf(largest);
  noDups.splice(index, 1);
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

const arr = [10];

document.getElementById('ans').textContent = secondLargest(arr);