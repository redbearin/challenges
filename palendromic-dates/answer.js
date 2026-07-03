palindromicDate = date => {
  // arr of date
  const dateArr = date.split('/');
  // string wo '/'
  const dateArrStr = dateArr.join('');

  // build alt order arr
  const otrDateFormat = [...dateArr];
  let temp = dateArr[1];
  otrDateFormat[1] = otrDateFormat[0];
  otrDateFormat[0] = temp;

  // str of alt arr
  const otrDateFormatStr = otrDateFormat.join('');

  // reverse of original date string
  const revDateStr = dateArrStr.split('').reverse().join('')

  if(otrDateFormatStr === revDateStr && dateArrStr === revDateStr) {
    return true;
  }
  return false;
}

const date = "02/02/2020";

document.getElementById('ans').textContent = palindromicDate(date);