makeRug = (width, height, char = "#") => {
  const arr = [];
  let row = char.repeat(width);
  for (let i = 0; i < height; i++) {
    arr.push(row);
  }
  return JSON.stringify(arr)
}
const width = 3;
const height = 5;

document.getElementById('ans').textContent = makeRug(width, height, '$');