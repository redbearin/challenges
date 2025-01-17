removeSpecialCharacters = str => {
  return str.replace(/[^A-Za-z0-9 _-]/g, "");
}

const str = "D0n$c sed 0di0 du1";

document.getElementById('ans').textContent = removeSpecialCharacters(str);