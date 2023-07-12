mapLetters = str => {
  const ltrLocs = {};
  for (let i = 0; i < str.length; i++) {
    if (ltrLocs[str[i]])
      ltrLocs[str[i]].push(i);
    else
      ltrLocs[str[i]] = [i];
  }
  return JSON.stringify(ltrLocs);
}

const str = "grapes";

document.getElementById('ans').textContent = mapLetters(str);