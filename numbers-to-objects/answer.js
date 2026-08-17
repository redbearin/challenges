numObj = arr => {
  let obj;
  for (let i = 0; i < arr.length; i++) {
    obj = {};
    obj[arr[i]] = String.fromCharCode(arr[i]);
    arr[i] = obj;
  }
  return JSON.stringify(arr);
}

const arr = [118, 103, 110];

document.getElementById('ans').textContent = numObj(arr);