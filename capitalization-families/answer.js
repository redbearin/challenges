grouping = words => {
  let capitals, len;
  const obj = {};
  for (let i = 0; i < words.length; i++) {
    capitals = words[i].match(/[A-Z]/g);
    len = capitals ? capitals.length : 0;
    if (obj[len]) {
      obj[len].push(words[i]);
    }
    else {
      obj[len] = [words[i]];
    }
  }
  for (key in obj) {
    obj[key].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  }
  const arr = Object.entries(obj);
  for (let i = 0; i < arr.length; i++) {
    arr[i][0] = +arr[i][0];
  }
  return JSON.stringify(arr);
}

const words = ["HaPPy", "mOOdy", "yummy", "mayBE"];

document.getElementById('ans').textContent = grouping(words);
