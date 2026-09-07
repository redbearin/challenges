mumbling = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + '-';
  }
  return newStr.slice(0, -1);
}

const str = "MubAshIr";

document.getElementById('ans').textContent = mumbling("MubAshIr");