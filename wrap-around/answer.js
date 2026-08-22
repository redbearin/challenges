wrapAround = (str, offset) => {
  if (Math.abs(offset) > str.length) {
    offset = offset % str.length;
  }
  return str.slice(offset) + str.slice(0, offset);
}

const str = "Nonscience";
const offset = -116;

document.getElementById('ans').textContent = wrapAround(str, offset);