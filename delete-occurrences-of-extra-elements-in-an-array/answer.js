deleteOccurrences = (arr, repeats) => {
  const counts = {};
  const modArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      if (counts[arr[i]] < repeats) {
        counts[arr[i]] += 1;
        modArr.push(arr[i]);
      }
    }
    else {
      counts[arr[i]] = 1;
      modArr.push(arr[i]);
    }
  }
  return JSON.stringify(modArr);
}

const arr = [true, true, true];
const repeats = 3;

document.getElementById('ans').textContent = deleteOccurrences(arr, repeats);