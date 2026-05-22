remix = (str, arr) => {
  const newArr = [...arr];
  for (let i = 0; i < str.length; i++) {
    newArr[arr[i]] = str[i];
  }
  return newArr.join('');
}

const str = "computer";
const arr = [0, 2, 1, 5, 3, 6, 7, 4];

document.getElementById('ans').textContent = remix(str, arr);