sortByString = (arr, order) => {
  const reordered = [];
  // go letter by letter thru order string
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // find the match, move on immediately after matching
      if (order[i] === arr[j][0]) {
        reordered.push(arr[j]);
        break;
      }
    }
  }
  return JSON.stringify(reordered);
}

const arr = ["poof", "floof", "loop"];
const order = "flatp";

document.getElementById('ans').textContent = sortByString(arr, order);