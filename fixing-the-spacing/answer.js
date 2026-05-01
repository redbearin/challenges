correctSpacing = str => {
  return str.replace(/ +/g, ' ').trim();
}

const str = "The film   starts       at      midnight. ";

document.getElementById('ans').textContent = correctSpacing("The film   starts       at      midnight. ")