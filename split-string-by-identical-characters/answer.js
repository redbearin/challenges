splitGroups = str => {
  let base = str[0];
  const arr = []
  for (let i = 1; i < str.length; i++) {
    if (base[base.length - 1] === str[i]) {
      base += str[i]
    }
    else {
      arr.push(base);
      base = str[i];
    }
    if (i === str.length - 1) {
      arr.push(base);
    }
  }
  return JSON.stringify(arr);
}

const str = "5556667788";

document.getElementById('ans').textContent = splitGroups(str);