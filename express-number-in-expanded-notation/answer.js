expand = num => {
  const numStr = num.toString();
  let zeroes = '';
  let final = '';
  for (let i = numStr.length - 1; i >=0; i--) {
    if (numStr[i] !== '0') {
      final = numStr[i] + zeroes + ' + ' + final;
    }
    zeroes += '0';
  }
  return final.slice(0,-3);
}

const num = 17000000;

document.getElementById('ans').textContent = expand(num);