longestAbecedarian = arr => {
  const arrSorted = arr.sort((a,b) => b.length - a.length);
  for (let i = 0; i < arr.length; i++) {
    if (arrSorted[i].toLowerCase().split('').sort().join('') === arrSorted[i].toLowerCase())
      return arrSorted[i];
  }
  return "";
}

const arr = ["forty", "choppy", "ghost"];

document.getElementById('ans').textContent = longestAbecedarian(arr);