sumOddAndEven = arr => {
  const ttls = [0,0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ?
    ttls[1] += arr[i]:
    ttls[0] += arr[i];
  }
  return JSON.stringify(ttls);s
}

const arr = [1, 2, 3, 4, 5, 6];

document.getElementById('ans').textContent = sumOddAndEven(arr);