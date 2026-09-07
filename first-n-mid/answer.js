stmid = str => {
  const strArr = str.split(' ');
  console.log(strArr)
  let pieces = '';
  for (let i = 0; i < strArr.length; i++) {
    strArr[i].length % 2 ?
      pieces += strArr[i][strArr[i].length/2 - 0.5] :
      pieces += strArr[i][0];
  }
  return pieces;
}
const str = "who is the winner";

document.getElementById('ans').textContent = stmid(str);