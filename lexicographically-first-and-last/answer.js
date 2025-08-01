firstAndLast = str => {
  const newStr = str;
  const first = str.split('').sort().join('');
  const last = newStr.split('').sort().reverse().join('');
  return JSON.stringify([first, last]);
}


const str = "marmite";

document.getElementById('ans').textContent = firstAndLast(str);