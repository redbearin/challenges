sameUpsidedown = num => {
  let newNum = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] === '6') {
      newNum += '9';
    }
    else if (num[i] === '9') {
      newNum += '6';
    }
    else {
      newNum += '0';
    }
  }
  if (newNum === num.split('').reverse().join('')) {
    return true;
  }
  return false;
}

const num = "6090609";

document.getElementById('ans').textContent = sameUpsidedown(num);