evenOddPartition = (arr) => {
  const odds = [];
  const evens = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ?
    odds.push (arr[i]):
    evens.push(arr[i]);
  }
  return JSON.stringify([evens, odds]);
}

const arr = [5, 8, 9, 2, 0];

document.getElementById('ans').textContent = 
evenOddPartition(arr);