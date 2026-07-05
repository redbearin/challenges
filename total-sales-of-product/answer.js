totalSales = (table, prod) => {
  const idx = table[0].indexOf(prod);
  if (idx === -1) {
    return "Product not found"
  }
  let sum = 0;
  for (let i = 1; i < table.length; i++) {
    sum += table[i][idx];
  }
  return sum;
}

const table = [
  ["A", "B", "C"],
  [ 2 ,  7 ,  1 ],
  [ 3 ,  6 ,  6 ],
  [ 4 ,  5 ,  5 ]
];
const prod = "B";

document.getElementById('ans').textContent = totalSales(table, prod);