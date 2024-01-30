tweet = str => {
  const strArr = str.split(' ');
  const links = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i][0] === '@' || 
        strArr[i][0] === '#') {
      links.push(strArr[i].replace(/[^@#a-zA-Z]/g,''));
    }
  }
  return links.join(' ');
}

const str = "#Honesty is the best @policy!!";

document.getElementById('ans').textContent = tweet(str);