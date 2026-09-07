validatePIN = str => {
  return (str.length === 4 || str.length === 6) && /^\d+$/.test(str) ?
    true :
    false;
}

const str = "1234";

document.getElementById('ans').textContent = validatePIN(str);