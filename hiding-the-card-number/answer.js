cardHide = str => {
  return str.slice(0, -4).replace(/[0-9]/g, "*") + str.slice(-4);
}

const str = "1234123456785678";

document.getElementById('ans').textContent = cardHide(str);