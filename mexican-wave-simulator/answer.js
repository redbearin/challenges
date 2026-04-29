wave = str => {
  if (str === ' ') {
    return JSON.stringify([]);
  }
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (i !== str.length - 1) {
        arr.push(str.slice(0,i) +str[i].toUpperCase() + str.slice(i+1));
      }
      else {
        arr.push(str.slice(0,i) + str[i].toUpperCase());
      }
    }
  }
  return JSON.stringify(arr);
}

const str = " ";

document.getElementById('ans').textContent = wave(str);