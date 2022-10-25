weekAfter = begDate =>  {
  // split beginning date into day, month, year
  const begDateArr = begDate.split('/');
  // create a date object for beginning date
  let date = new Date(+begDateArr[2], +begDateArr[1] - 1, +begDateArr[0]);
  // add 7 days to date
  date.setDate(date.getDate() + 7);
  // create a string formatted date
  strDate = (new Date(date)).toISOString().split('T')[0];
  // break the day, month, year into an array
  strDateArr = strDate.split('-');
  // rearrage based on order and format as requested
  return strDateArr[2] + '/' + strDateArr[1] + '/' + strDateArr[0]
}

const begDate =  "30/12/2020";

document.getElementById('ans').textContent =  weekAfter(begDate);