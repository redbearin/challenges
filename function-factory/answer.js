plusTen = (num) => {
  return num + 10;
}
plusFive = (num) => {
  return num + 5;
}

const val = 180;

document.getElementById('ans').textContent = plusTen(plusFive(val));


