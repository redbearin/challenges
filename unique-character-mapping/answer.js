characterMapping = str => {
  let counter = 0;
  const obj = {};
  obj[str[0]] = 0;
  for (let i = 1; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      counter++;
      obj[str[i]] = counter;
    }
  }
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(obj[str[i]]);
  }
  return JSON.stringify(arr);
}
const str = "babbcb";

document.getElementById('ans').textContent = characterMapping(str);