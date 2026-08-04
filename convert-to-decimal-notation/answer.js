convertToDecimal = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].substring(0, arr[i].length - 1)/100;
  }
  return JSON.stringify(arr);
}

const arr = ["1%", "2%", "3%"];

document.getElementById('ans').textContent = convertToDecimal(arr);