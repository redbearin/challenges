partition = (str, n) => {
  const arr = [];
  for (let i = 0; i < str.length; i += n) {
    i + n < str.length ?
      arr.push(str.slice(i, i + n)) :
      arr.push(str.slice(i, str.length));
  }
  return JSON.stringify(arr);
}

const str = "che";
const n = 2;

document.getElementById('ans').textContent = partition(str, n);