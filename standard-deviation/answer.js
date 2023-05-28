standardDeviation = arr => {
  const mean = arr.reduce((val, acc) => acc + val)/arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(Math.abs(arr[i] - mean), 2);
  }
  return Math.round(Math.pow(sum/arr.length, .5) * 100)/100;
}

const arr = [3, 5, 7];

document.getElementById('ans').textContent = standardDeviation(arr);