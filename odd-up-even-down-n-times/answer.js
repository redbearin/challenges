evenOddTransform = (arr, times) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ?
    arr[i] = arr[i] + (2 * times) :
    arr[i] = arr[i] - (2 * times);
  }
  return JSON.stringify(arr);
}

const arr = [0,0,0];
const times = 10;

document.getElementById('ans').textContent = 
evenOddTransform(arr, times);