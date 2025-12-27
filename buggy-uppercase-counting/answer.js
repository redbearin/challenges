countUppercase = arr => {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) { 
    for(let j = 0; j < arr[i].length; j++) {
      if (arr[i].charCodeAt(j) < 97) {
        sum++;
      }
    }
	}
	return sum;
}

const arr = ["SOLO", "hello", "Tea", "wHat"];

document.getElementById('ans').textContent = countUppercase(arr);