mineralFormation = (arr) => {
  if (arr[0].includes(1)) {
    if (arr[arr.length - 1].includes(1)) {
        return "both";
    }
    return "stalactites";
  }
  return "stalagmites";
}
const arr = [
  [0, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
]

document.getElementById('ans').textContent = mineralFormation(arr); 