findShortestWords = str => {
  const regex = /[^a-zA-Z\s]/g;
  str = str.replace(regex, "");
  str = str.replace(/\s\s/, " ");
  str = str.toLowerCase();
  console.log(str)
  const strArrSort = str.split(" ").sort((a, b) => a.length - b.length);
  const shortestWds = [strArrSort[0]];
  for (let i = 1; i < strArrSort.length; i++) {
    if (strArrSort[i].length === strArrSort[i - 1].length)
      shortestWds.push(strArrSort[i]);
    else  
      break;
  }
  return JSON.stringify(shortestWds.sort());
}

const str = "You miss 100% of the shots you don’t take.";

document.getElementById('ans').textContent = findShortestWords(str);