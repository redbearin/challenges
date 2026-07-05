firstRepeat = str => {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]])
      return str[i]
    else
      counts[str[i]] = 1;
  }
  return -1;
}

const str = "Isildur";

document.getElementById('ans').textContent = firstRepeat(str);