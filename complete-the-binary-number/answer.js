completeBinary = str => {
  const remainder = str.length % 8;
  if (remainder === 0) {
    return str;
  }
  return '0'.repeat(8-remainder) + str;
}

const str = "1111011011010101000001010001000011110000001100100001111110111110001100";
document.getElementById('ans').textContent = completeBinary(str);