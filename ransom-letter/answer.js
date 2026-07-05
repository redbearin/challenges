canBuild = (str, substr) => {
  const strArr = str.split('');
  let idx;
  for (let i = 0; i < substr.length; i++) {
    idx = strArr.indexOf(substr[i]);
    if (idx >= 0) {
      strArr[idx] = '*';
    }
    else {
      return false;
    }
  }
  return true;
}

const str = "topsh";
const substr = "shop";

document.getElementById('ans').textContent = canBuild(str, substr);