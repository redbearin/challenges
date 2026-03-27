rearrangedDifference = num => {
  const numStrAsc = num.toString().split('').sort().join('');
  const numStrDec = num.toString().split('').sort().reverse().join('');
  return +numStrDec - +numStrAsc;
}

const num = 972882;

document.getElementById('ans').textContent = rearrangedDifference(num);