countdown = (num, str) => {
  let ctStr = ''
  for (let i = num; i > 0; i--) {
    ctStr += i + '. ';
  }
  return ctStr + str.toUpperCase() + '!';
}

const num = 10;
const str = "Blast Off"

document.getElementById('ans').textContent = countdown(num, str); 