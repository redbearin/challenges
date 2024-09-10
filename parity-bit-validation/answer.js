validateBinary = str => {
  const count = (str.slice(0,-1).match(/1/g) || []).length;
  // even
  if (count % 2 === 0) {
    return str[7] === '0' ?
    true :
    false;
  } 
  // odd
  else {
    return str[7] === '1' ?
      true :
      false;
  }
}

const str = "10100011";

document.getElementById('ans').textContent = validateBinary(str);