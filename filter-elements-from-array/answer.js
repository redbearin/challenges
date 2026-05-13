filArr = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return JSON.stringify(newArr);
}
const arr = [0,10,20,30];

document.getElementById('ans').textContent = filArr(arr);