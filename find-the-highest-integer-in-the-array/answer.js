findHighest = (arr) => {
  console.log('count')
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? 
      arr[0] : 
      arr[1];
  }
  const subArr = findHighest(arr.slice(1));
  return arr[0] > subArr ? 
    arr[0]: 
    subArr;
}

const arr = [-1, 3, 5, 6, 99, 12, 2]; 

document.getElementById('ans').textContent = findHighest(arr);