uniqueArr = arr => {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && !uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
	return JSON.stringify(uniqueArr);
}    

const arr = [-5, 1, -7, -5, -2, 3, 3, -5, -1, -1];

document.getElementById('ans').textContent = uniqueArr(arr);