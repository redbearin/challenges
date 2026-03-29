uniqueSort = arr => {
  return JSON.stringify([... new Set(arr)].sort((a,b)=> a-b));
}

const arr = [5, 1, 2, 4, 2, 3];

document.getElementById('ans').textContent = uniqueSort(arr);