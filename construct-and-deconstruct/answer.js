constructDeconstruct = str => {
  const arr = [];
  let front = '';
  for (let i = 0; i < str.length; i++) {
    front += str[i];
    arr.push(front);
  }
  const frontArr = [...arr];
  return JSON.stringify(frontArr.concat(arr.reverse().slice(1)));
}

const str = "Hello";

document.getElementById('ans').textContent = constructDeconstruct(str);