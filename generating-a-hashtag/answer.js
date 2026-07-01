generateHashtag = str => {
  if (!str.length || !str.replace(/\s+/g,'').length) {
    return false;
  }
  const cleanStrArr = str.replace(/\s+/g,' ').trim().split(' ');
  for (let i = 0; i < cleanStrArr.length; i++) {
    cleanStrArr[i] = cleanStrArr[i][0].toUpperCase() + cleanStrArr[i].slice(1);
  }
  return ('#' + cleanStrArr.join('')).length > 140 ?
  false:
  '#' + cleanStrArr.join('');
}

const str = "    Hello     World   ";

document.getElementById('ans').textContent = generateHashtag(str);