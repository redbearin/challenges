arrDest = arr => {
  let [a, b, [c, [d]]] = arr;
  return a + " ," + b + " ," + c + " ," + d;
}
const arr = ["cars", "planes", ["trains", ["motorcycles"]]];

document.getElementById('ans').textContent = arrDest(arr);