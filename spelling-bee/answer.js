validateSpelling = str => {
  const elements = str.split(' ');
  for (let i = 0; i < elements.length - 1; i++) {
    if (elements[i][0].toLowerCase() !== 
        elements[elements.length - 1][i].toLowerCase())
      return false;
  }
  return true;
}

const str = "H. A. N. K. E. R. C. H. E. I. F. Handkerchief.";

document.getElementById('ans').textContent = validateSpelling(str);