emotify = str => {
  if (str.includes('smile')) {
    return str.replace('smile', ':D');
  }
  if (str.includes('grin')) {
    return str.replace('grin', ':)');
  }
  if (str.includes('sad')) {
    return str.replace('sad', ':(');
  }
  if (str.includes('mad')) {
    return str.replace('mad', ':P');
  }
}

const str = "Make me smile";

document.getElementById('ans').textContent = emotify(str);