rotateArray = (arr, num) => {
  // positive offset
  if (num >= 0) {
    if (num > arr.length)
      return JSON.stringify(arr.slice(-(num % arr.length)).concat(arr.slice(0, -(num % arr.length))));
    return JSON.stringify(arr.slice(-num).concat(arr.slice(0, -num)));
  }
  // negative offset
  else {
    let incr = Math.abs(num);
    if (incr > arr.length)
      return JSON.stringify(arr.slice(incr % arr.length).concat(arr.slice(0, incr % arr.length)));
    else 
      return JSON.stringify(arr.slice(incr).concat(arr.slice(0, incr)));
  }
}

const arr = [0, 1, 2, 3, 4, 5, 7, 9];
const num = 2;

document.getElementById('ans').textContent = rotateArray(arr, num);