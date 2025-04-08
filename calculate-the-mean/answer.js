mean = arr => {
  return Math.round(arr.reduce((acc, val) => 
    acc + val)/arr.length * 100)/100;
}

const arr = [1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3];

document.getElementById('ans').textContent = mean(arr);