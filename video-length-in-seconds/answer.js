minutesToSeconds = str => {
  const strArr = str.split(':');
  if (+strArr[1] > 59) {
    return false;
  }
  return +strArr[0]*60 + +strArr[1];
}

const str = "10:60";

document.getElementById('ans').textContent = minutesToSeconds(str);