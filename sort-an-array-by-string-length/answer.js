sortByLength = arr => {
  return JSON.stringify(arr.sort((a,b) => a.length - b.length));
}

const arr = ["Google", "Apple", "Microsoft"];

document.getElementById('ans').textContent = sortByLength(arr);a