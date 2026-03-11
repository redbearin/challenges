letterCounter = (arr, ltr) => {
  let ltrCt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === ltr) {
        ltrCt++;
      }
    }
  }
  return ltrCt;
}

const arr = [
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
]
const ltr = "D";

document.getElementById('ans').textContent = letterCounter(arr, ltr);