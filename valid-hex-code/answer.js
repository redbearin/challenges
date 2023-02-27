isValidHexCode = code => {
  if (code.length !== 7 || 
      code[0] !== '#')
    return false;
  const alphaNumCode = code.slice(1);
  const regex = new RegExp('[a-fA-F]+$[0-9]+$');
  if (regex.test(alphaNumCode))
    return true;
  return false;
}

const code = "CD5C5C";

document.getElementById('ans').textContent = isValidHexCode(code);