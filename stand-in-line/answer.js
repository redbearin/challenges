nextInLine = (arr, last) => {
  if (!arr.length)
    return "No array has been selected"
  arr.push(last)
    return JSON.stringify(arr.slice(1));
}

const arr = [];
const last = 6;

document.getElementById('ans').textContent = nextInLine(arr, last);

