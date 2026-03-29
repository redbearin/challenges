magic = dateStr => {
  const dateStrArr = dateStr.split(' ');
  const num = +dateStrArr[0] * +dateStrArr[1];
  console.log(num)
  if (num > 99) {
    return num.toString() === dateStrArr[2].slice(-3);
  }
  if (num > 9) {
    return num.toString() === dateStrArr[2].slice(-2);
  }
  return num.toString() === dateStrArr[2][3];
}

const dateStr = "1 1 2011"

document.getElementById('ans').textContent = magic(dateStr);