integerBoolean = str => {
  const bools = [];
  for (let i = 0; i < str.length; i++) {
    str[i] === '1'?
    bools.push(true):
    bools.push(false);
  }
  return JSON.stringify(bools);
}
const str = "100101";

document.getElementById('ans').textContent = integerBoolean(str);