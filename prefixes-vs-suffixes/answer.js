isPrefix = (word, pre) => {
  return word.slice(0, pre.length - 1) === pre.slice(0, -1) ?
  true :
  false;
}

isSuffix = (word, suf) => {
  const len = suf.length - 1;
  return word.slice(-(suf.length - 1)) === suf.slice(1) ?
  true :
  false;
}

const word = "arachnophobia";
const suf = "-phobia";

document.getElementById('ans').textContent = isSuffix(word, suf);