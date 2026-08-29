oddOneOut = arr => {
  const sizeSort = arr.sort ((a,b) => a.length - b.length);
  if (arr[0].length !== arr[1].length && 
      new Set(arr.slice(1).map(element => element.length)).size === 1 
     || 
     arr[arr.length - 1].length !== arr[arr.length - 2].length && new Set(arr.slice(0,-1).map(element => element.length)).size === 1 ) {
      return true;
  }
  return false;
}


const arr = ["very", "to", "an", "some"];

document.getElementById('ans').textContent = oddOneOut(arr);