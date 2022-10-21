countNumber = arr => {
  const newArr = arr.flat(Infinity);
  let numCount = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] === "number")
      numCount++;
  }
  return numCount;
}
const arr = [["balkot"]];

document.getElementById('ans').textContent = countNumber(arr);
