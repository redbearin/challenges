reorderDigits = (arr, dir) => {
  const sortedNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (dir === 'asc') {
      sortedNums.push(+(arr[i].toString().split('').sort().join('')));
    }
    else {
      sortedNums.push(+(arr[i].toString().split('').sort((a,b) => b-a).join('')));
    }
  }
  return JSON.stringify(sortedNums);
}

const arr = [515, 341, 98, 44, 211];
const dir = "desc";

document.getElementById('ans').textContent = reorderDigits(arr, dir);
