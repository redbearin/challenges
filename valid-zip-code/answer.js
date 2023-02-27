const isValid = str => {
  if (/\b\d{5}\b/.test(+str))
    return true;
  return false;
};

const str = "393939";

document.getElementById('ans').textContent = isValid(str);