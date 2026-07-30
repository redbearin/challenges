showdown = (str1, str2) => {
  if (str1.trimEnd().length > str2.trimEnd().length) {
    return   "p2";
  } 
  if (str1.trimEnd().length === str2.trimEnd().length) {
    return "tie";
  }
  return "p1";
}

const str1 = "   Bang!        ";
const str2 = "        Bang!   ";

document.getElementById('ans').textContent = showdown(str1, str2);