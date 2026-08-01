// only works below max safe number
numberLength = num => {
  return num.toString().length;
}

const num = 10;

document.getElementById('ans').textContent = numberLength(num);

