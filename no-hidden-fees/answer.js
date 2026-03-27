hasHiddenFee = (arr, total) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i].slice(1);
  }
  if (+total.slice(1) > sum) {
    return true;
  }
  return false;
}

const arr = ["$1"];
const total = "$15";

document.getElementById('ans').textContent = hasHiddenFee(arr, total);