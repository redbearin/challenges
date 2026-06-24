splitCode = str => {
  const first = str.match(/([A-Za-z])/g).join('');
  const last = +str.match(/([0-9])/g).join('');
  return JSON.stringify([first, last]);
}

const str = "TEWA8392";

document.getElementById('ans').textContent = splitCode(str);