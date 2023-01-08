canBuild = (str1, str2) => {
  str1 = str1.replace(/ /g, '');
  const str2Arr = str2.split('');
  let index;
  for (let i = 0; i < str1.length; i++) {
    console.log('i: ',i)
    index = str2Arr.indexOf(str1[i]);
    if (index === -1) {
      return false;
    }
    else {
      str2Arr[index] = "*";
    }
  }
  return true;
}

const str1 = "gate im in";
const str2 = "magnetizing";

document.getElementById('ans').textContent = canBuild(str1, str2);