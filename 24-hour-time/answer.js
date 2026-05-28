convertTime = str => {
  const strArr = str.split(':');
  if (strArr[0] === '12') {
    if (strArr[2][strArr[2].length - 2] === 'P') {
      return str.slice(0, -2);
    }
    return "00" + str.slice(2, -2);
  }
  if (strArr[2][strArr[2].length - 2] === 'P') {
    return (+strArr[0] + 12).toString() + ':' + strArr[1] + ':' + strArr[2].slice(0, -2);
  }
  return str.slice(0, -2);
}
const str = "12:45:54PM";

document.getElementById('ans').textContent = convertTime(str);
