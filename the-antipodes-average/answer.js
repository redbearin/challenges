antipodesAverage = arr => {
  if (arr.length % 2) {
    arr.splice (Math.floor(arr.length/2), 1);
  }
  const first = arr.slice(0, arr.length/2);
  const sec = arr.slice(arr.length/2).reverse();
  const sumDivArr = [];
  for (let i = 0; i < first.length; i++) {
    sumDivArr.push((first[i] + sec[i])/2);
  }
  return JSON.stringify(sumDivArr);
}

const arr = [1, 2, 3, 4, 5];

document.getElementById('ans').textContent = antipodesAverage(arr);