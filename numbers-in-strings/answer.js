numInStr = arr => {
  return JSON.stringify(arr.filter(ele => /[0-9]/.test(ele)));
}
const arr = ["1a", "a", "2b", "b"];

document.getElementById('ans').textContent = numInStr(arr);