isThereConsecutive = (arr, n, times) => {
  if (!times) {
		if (arr.includes(n) === false) {
			return true;
		}
		return false;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
      if (count === times)
        return true;
    }
    else {
      if (count) {
        count = 0;
      }
    }
  }
  return false;
}

const arr = [5, 5, 5, 5, 5];
const n = 5;
const times = 7;

document.getElementById('ans').textContent = isThereConsecutive(arr, n, times);