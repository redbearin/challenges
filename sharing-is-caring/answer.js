showTheLove = arr => {
  let arrCopy = [...arr];
  arrCopy.sort((a,b) => a - b);
  let smallestIdx = arr.indexOf(arrCopy[0]);
  let sumReductions = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === smallestIdx) {
      continue;
    }
    else {
      sumReductions += arr[i] * .25;
      arr[i] = arr[i] * .75;
    }
  }
  arr[smallestIdx] = arr[smallestIdx] + sumReductions;
  return JSON.stringify(arr);
}

const arr = [2, 100];

document.getElementById('ans').textContent = showTheLove(arr);