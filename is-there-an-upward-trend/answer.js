upwardTrend = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'string')
      return "Strings not permitted!";
    if (arr[i] < arr[i-1]) {
      return false;
    }
  }
  return true;
}

const arr = [1, 2, 3, "4"];

document.getElementById('ans').textContent = upwardTrend(arr);