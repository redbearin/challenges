timeForMilkAndCookies = theDate => {
  return theDate.getMonth() === 11 && theDate.getDate() === 24;
}

const theDate = new Date(2013, 11, 24);

document.getElementById('ans').textContent = timeForMilkAndCookies(theDate);