binaryConversion = str => {
  let parts = str.match(/.{1,8}/g) || [];
  parts = parts.map(ele => parseInt(ele,2));
  parts = parts.map(ele => String.fromCharCode(ele));
  return parts.join('');
}

const str = "011001010110010001100001011000100110100101110100";

document.getElementById('ans').textContent = binaryConversion(str);