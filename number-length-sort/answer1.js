numberLenSort = arr => {
  return arr.sort((a,b) => a.toString().length - b.toSting().length);
}

const arr = [1, 54, 1, 2, 463, 2];

document.getElementById('ans').textContent = numberLenSort(arr);
