column = str => {
  return (str.length - 1) * 26 + str.charCodeAt(str.length - 1) - 64;
}

const str = "AA";

document.getElementById('ans').textContent = column(str);