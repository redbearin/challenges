indexOfCaps = str => {
  const indices = [];
  for (let i = 0 ; i < str.length; i++) {
    if (str.charCodeAt(i) < 91 && 
        str.charCodeAt(i) > 64) {
      indices.push(i);
    }
  }
  return JSON.stringify(indices);
}

const str = "eQuINoX";

document.getElementById('ans').textContent = indexOfCaps(str);