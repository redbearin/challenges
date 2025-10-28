oppositeHouse = (num, lenSt) => {
  return lenSt * 2 - (num - 1);
}
const num = 1;
const lenSt = 3;

document.getElementById('ans').textContent = oppositeHouse(num, lenSt);