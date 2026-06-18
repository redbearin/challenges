strongPassword = str => {
  const numArr = "0123456789".split('');
  const lowerArr = "abcdefghijklmnopqrstuvwxyz".split('');
  const upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const specArr = "!@#$%^&*()-+".split('');
  let hasItems = [0,0,0,0];
  for (let i = 0; i < str.length; i++) {
    if (upperArr.includes(str[i])) {
      hasItems[0] = 1;
    }
    if (lowerArr.includes(str[i])) {
      hasItems[1] = 1;
    }
    if (numArr.includes(str[i])) {
      hasItems[2] = 1;
    }
    if (specArr.includes(str[i])) {
      hasItems[3] = 1;
    }
  }
  let needed = 4 - hasItems.reduce((acc, ele) => acc + ele, 0);
  if (str.length + needed >= 6) {
    return needed;
  }
  return needed + (6 - (str.length + needed));
}

const str = "Ed3";

document.getElementById('ans').textContent = strongPassword(str);