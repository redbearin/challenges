getMiddle = str => {
  return str.length % 2 ?
    str.slice(Math.floor(str.length/2), Math.floor(str.length/2) + 1) :
    str.slice(str.length/2 - 1, str.length/2 + 1);
}
const str = "test";

document.getElementById('ans').textContent = getMiddle(str);