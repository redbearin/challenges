sunLoungers = beach => {
  // 1 or 2 digits
  if(beach.length < 3) {
    if (beach.includes('1')) {
      return 0;
    }
    else {
      return 1;
    }
  }
  // 3 or more digits
  let newPeople = 0;
  let continuousOpenSpaces = 0;
  let beginningIdx = false;
  for (let i = 0; i < beach.length; i++) {
    // digit a 0
    if (beach[i] === '0') {
      continuousOpenSpaces++;
      if (i === 0) {
        beginningIdx = true;
      }
      if (i === beach.length - 1 && 
          continuousOpenSpaces >= 2) {
        if (beginningIdx === true) {
          return Math.ceil(continuousOpenSpaces/2);
        }
        newPeople += Math.floor(continuousOpenSpaces/2);
      }
    }
    // digit not a 0
    else {
      if ((beginningIdx && continuousOpenSpaces > 1) ||
           continuousOpenSpaces > 2) {
        if (!beginningIdx && 
            continuousOpenSpaces % 2 === 0) {
          continuousOpenSpaces--;
        }
        newPeople += Math.floor(continuousOpenSpaces/2)
      }
      beginningIdx = false;
      continuousOpenSpaces = 0;
    }
  }
  return newPeople;
}
const beach = "001000100000001010001010010000001000101000000";

document.getElementById('ans').textContent  = sunLoungers(beach);