formatNum = num => {
  return num.toLocaleString("en-US");
}

const num = 100000

document.getElementById('ans').textContent = formatNum(num);