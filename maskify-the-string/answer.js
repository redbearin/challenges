maskify = str => {
  return str.length > 4 ?
    '#'.repeat(str.length - 4) + str.slice(-4):
    str;
}

const str = "4556364607935616";

document.getElementById('ans').textContent = maskify(str);