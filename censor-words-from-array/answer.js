censorString = (str, arr, char) => {
  let rep;
  for (let i = 0; i < arr.length; i++) {
    rep = char.repeat(arr[i].length);
    str = str.replace(arr[i], rep);
  }
  return str;
}

const str = "Today is a Wednesday!";
const arr = ["Today", "a"];
const char = "-";

document.getElementById('ans').textContent = censorString(str, arr, char);