flip = (str, typeOfRev) => {
  const strArr = str.split(' ');
  if (typeOfRev === "sentence") {
    for (let i = 0; i < strArr.length; i++) {
      return strArr.reverse().join(' ');
    }
  }
  const newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].split('').reverse().join(''));
  }
  return newArr.join(' ');
}

const str = "There's never enough time to do all the nothing you want";
const typeOfRev = "sentence";

document.getElementById('ans').textContent = flip(str, "sentence");