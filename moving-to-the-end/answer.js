moveToEnd = (arr, ele) => {
  const newArr = [];
  const elements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      elements.push(arr[i]);
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return JSON.stringify(newArr.concat(elements));
}

const arr = ["a", "a", "a", "b"];
const ele = "a";

document.getElementById('ans').textContent = moveToEnd(arr, ele);