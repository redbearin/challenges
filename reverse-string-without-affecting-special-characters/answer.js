revSpecstring = str => {
  const cleanRevArr = str.replace(/[^A-Za-z]/g, "").split('').reverse();
  let newStr = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if(/[A-Za-z]/.test(str[i])) {
      newStr += cleanRevArr[count];
      count++;
    }
    else {
      newStr += str[i];
    }

  }
  return newStr;
}

const str = "AFC#47GH$Ieu";

document.getElementById('ans').textContent = revSpecstring(str);