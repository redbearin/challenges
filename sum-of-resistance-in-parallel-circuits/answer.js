parallelResistance = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += 1/arr[i];
  }
  return Math.round(1/sum * 10)/10;
}

const arr = [6, 3, 6];

document.getElementById('ans').textContent = parallelResistance(arr);