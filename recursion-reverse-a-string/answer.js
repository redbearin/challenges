reverse = str => {
  if (!str) {
    return "";
  }
  return str.slice(-1) + reverse(str.slice(0, -1));
}

const str = "hello";

document.getElementById('ans').textContent = reverse(str);