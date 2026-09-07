XO = str => {
  str = str.toLowerCase();
  const counts = [0,0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x' || 
        str[i] === 'o') {
      str[i] === 'x' ?
        counts[0] += 1:
        counts[1] += 1; 
    }
  }
  return counts[0] === counts[1] ?
    true :
    false;
}

const str = "oXoxghx";

document.getElementById('ans').textContent = XO(str);