toObj = arr => {
  let obj;
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    obj = {};
    obj[arr[i]] = arr[i].charCodeAt(0);
    final.push(obj);
  }
  return JSON.stringify(final);
}

const arr = ["a", "b", "c"];

document.getElementById('ans').textContent = toObj(arr);