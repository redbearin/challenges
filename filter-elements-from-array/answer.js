greaterThan = (arr, n)=> {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      newArr.push(arr[i]);
    }
  }
  return JSON.stringify(newArr);
}
const arr = [0,10,20,30];
const n = 10

document.getElementById('ans').textContent = greaterThan(arr, n);