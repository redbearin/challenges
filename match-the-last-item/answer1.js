matchLastItem = arr => {
	return arr.pop() === arr.join('');
}

const arr = ["rsq", "6hi", "g", "rsq6hig"];

document.getElementById('ans').textContent = matchLastItem(arr);