isAvgWhole = arr => {
  return Number.isInteger(arr.reduce((acc,val) => acc + val)/arr.length);
}

const arr = [1, 2, 3, 4];

document.getElementById('ans').textContent = isAvgWhole(arr);