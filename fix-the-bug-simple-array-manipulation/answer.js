incrementItems = arr => {
  for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] + 1;
  }
	return JSON.stringify(arr);
}
const arr = [0, 1, 2, 3];

document.getElementById('ans').textContent = incrementItems(arr);