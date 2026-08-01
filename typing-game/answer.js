correctStream = (arr1, arr2) => {
  const match = [];
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] === arr2[i] ?
    match.push(1) :
    match.push(-1);
  }
  return JSON.stringify(match);
}
const arr1 = ["it", "is", "find"]
const arr2 = ["it", "is", "fine"];

document.getElementById('ans').textContent = correctStream(arr1, arr2);