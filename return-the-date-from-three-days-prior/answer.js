threeDaysAgo = d => {
  d.setDate(d.getDate() - 3);
  const dateArr = d.toLocaleString('en-US').split(',')[0].split('/');
  if (dateArr[0].length === 1) {
   dateArr[0] = 0 + dateArr[0];
  }
  if (dateArr[1].length === 1) {
    dateArr[1] = 0 + dateArr[1];
   }
  return dateArr[2] + '-' + dateArr[0] + '-' + dateArr[1];
}

const d = new Date(2018, 0, 1);

document.getElementById('ans').textContent = threeDaysAgo(d);