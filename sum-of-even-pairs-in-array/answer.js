oddSum = arr => {
  const pairs= [];
  for (let i = 1; i < arr.length; i++) {
    (arr[i] + arr[i-1]) % 2 === 0 ?
    pairs.push(true) :
    pairs.push(false);
  }
  return JSON.stringify(pairs);
}

const arr = [11, 15, 6, 8, 9, 10];

document.getElementById('ans').textContent = oddSum(arr);