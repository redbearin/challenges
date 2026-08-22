longestZero = str => {
  return str.split('1').sort().reverse()[0];
}
const str = "100100100";

document.getElementById('ans').textContent = longestZero(str);