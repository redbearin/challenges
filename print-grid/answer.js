printgrid = (rows, cols) => {
  let sub;
  const final = [];
  for (let i = 0; i < rows; i++) {
    sub = [i + 1];
    for (let j = 1; j < cols; j++) {
        sub.push(sub[sub.length - 1] + rows);
    } 
    final.push(sub);
  }
  return JSON.stringify(final);
}

const rows = 5;
const cols = 3;

document.getElementById('ans').textContent = printgrid(rows, cols);
