cleanUpArray = arr => {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    +arr[i] % 2 ? 
    odd.push(+arr[i]) :
    even.push(+arr[i]);
  }
  return JSON.stringify([even, odd]);
}

const arr = ["7", "4", "8"];

document.getElementById('ans').textContent = cleanUpArray(arr);