flippingBits = n => {
  const to32BitBinary = (n >>> 0).toString(2).padStart(32, '0');
  console.log(to32BitBinary)
  let flipped = '';
  for (let i = 0; i < to32BitBinary.length; i++) {
    if (to32BitBinary[i] === '1') {
      flipped += '0';
    }
    else {
      flipped += '1';
    }
  }
  return parseInt(flipped, 2);
}

const n = 2147483647;

document.getElementById('ans').textContent = flippingBits(n);