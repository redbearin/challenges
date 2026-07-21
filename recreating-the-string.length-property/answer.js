length = str => {
  let count = 0;
  let i = 0;
  while (str[i] !== undefined) {
    count++;
    i++;
  }
  return count;
}

const str = "wash your hands!";

document.getElementById('ans').textContent = length(str);