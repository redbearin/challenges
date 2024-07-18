mapLetters = str => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ?
      obj[str[i]].push(i):
      obj[str[i]] = [i];
  }
  return JSON.stringify(obj);
}

const str = "dodo";

document.getElementById('ans').textContent = mapLetters(str) 

