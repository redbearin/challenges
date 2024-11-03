weekAfter = dateStr => {
  const dateArr = dateStr.split('/');
  const newFormat = new Date(dateArr[1]+'/'+
                    dateArr[0]+'/'+
                    dateArr[2]);
  const result = new Date(newFormat);
  result.setDate(result.getDate() + 7);
  const newStr = result.toLocaleDateString("en-GB");
  const newStrArr = newStr.split('/');
  if (newStrArr[0].length === 1) {
    newStrArr[0] = '0' + newStrArr[0];
  }
  if (newStrArr[1].length === 1) {
    newStrArr[1] = '0' + newStrArr[1];
  }
  return newStrArr.join('/');
}
const dateStr = "29/12/2020";
document.getElementById('ans').textContent = weekAfter(dateStr);

