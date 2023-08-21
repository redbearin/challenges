nextInLine = (arr, addToEnd) => {
  if (Array.isArray(arr)) {
    const newArr = arr.slice(1);
    newArr[arr.length - 1] = addToEnd;
    return JSON.stringify(newArr);
  }
  return "No array has been selected";
}

const arr = [5, 6, 7, 8, 9];

const addToEnd = 1;

document.getElementById('ans').textContent = nextInLine(arr, addToEnd);