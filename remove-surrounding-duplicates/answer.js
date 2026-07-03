uniqueInOrder = str => {
  const singleLtrs = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i-1])
    singleLtrs.push(str[i])
  }
  return JSON.stringify(singleLtrs);
}

const str = "AAAABBBCCDAABBB";

document.getElementById('ans').textContent = uniqueInOrder(str);
