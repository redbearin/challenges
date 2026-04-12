canBuild = arr => {
  let regex;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length !== arr[i - 1].length + 1)
      return false;
    regex =  new RegExp(arr[i - 1]); 
    if (regex.test(arr[i]) === false)
      return false;
  }
  return true;
}

const arr = ["mean", "meany"];

document.getElementById('ans').textContent = canBuild(arr);