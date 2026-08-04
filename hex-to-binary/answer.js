toBinary = hex => {
  return (parseInt(hex, 16)).toString(2);
}

const hex = 0xFF;

document.getElementById('ans').textContent = toBinary(hex);