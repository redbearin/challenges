calculateArrowhead = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] === ">" ?
      count++ :
      count--;
    }
  }
  if (count === 0) {
    return "";
  }
  return count > 0 ?
  '>'.repeat(count):
  '<'.repeat(-count);
}

const arr = [">>>>", "<", "<", "<"];

document.getElementById('ans').textContent = calculateArrowhead(arr);