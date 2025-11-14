nTablesPlusOne = num => {
  let str = '';
  for (let i = 1; i <= 9; i++) {
    str += num * i + 1 + ','
  }
  return str += num * 10 + 1;
}

const num = 3;

document.getElementById('ans').textContent = nTablesPlusOne(num);