grabCity = str => {
  const strArr = str.split(/([\[\]])/g);
  return strArr[strArr.length - 3];
}

const str = "[Last Day!] Beer Festival [Munich]";

document.getElementById('ans').textContent = grabCity(str);