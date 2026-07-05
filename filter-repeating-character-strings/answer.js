identicalFilter = arr => {
  const repeats = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].replace(/(.)\1+/g, "$1").length === 1) {
      repeats.push(arr[i]);
    }
  }
  return JSON.stringify(repeats);
}

const arr = ["aaaaaa", "bc", "d", "eeee", "xyz"];

document.getElementById('ans').textContent = identicalFilter(arr); 