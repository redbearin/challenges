repeat = (str, times) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].repeat(times);
  }
  return newStr;
}
const str = "mice"
const times = 5;
document.getElementById('ans').textContent = repeat(str, times);