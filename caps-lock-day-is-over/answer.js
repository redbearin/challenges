normalize = str => {
  if (str.toUpperCase() === str) {
    return str[0] + str.slice(1).toLowerCase() + '!';
  }
  if (str[0].toUpperCase() === str[0] && 
      str.slice(1).toLowerCase()=== str.slice(1)) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const str = "CAPS LOCK DAY IS OVER";

document.getElementById('ans').textContent = normalize(str);