leftShift = (arr, inc) => {
  return inc <= arr.length ?
    JSON.stringify(arr.slice(inc).concat(arr.slice(0, inc))) :
    JSON.stringify(arr.slice(inc % arr.length).concat(arr.slice(0, inc % arr.length)));
}

rightShift = (arr, inc) => {
  return inc <= arr.length ?
    JSON.stringify(arr.slice(-inc).concat(arr.slice(0, -inc))):
    JSON.stringify(arr.slice(-inc % arr.length).concat(arr.slice(0, -inc % arr.length)));
}

const arr = [1, 2, 3, 4];
const inc = 1;

document.getElementById('ans').textContent = leftShift(arr, inc);

document.getElementById('ans').textContent = rightShift(arr, inc);