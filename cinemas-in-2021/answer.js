maximumSeating = arr => {
  // < 4 SEATS
  if (arr.length < 4) {
    if (arr.includes(1)) {
      return 0;
    }
    return 1;
  }

  // > 3 SEATS 
  let newPeople = 0;
  let begIdx = 0;
  let end = arr.length; // one beyond ending index

  //end cases
  if (arr[0] === 0 && 
      arr[1] === 0 && 
      arr[2] === 0) {
    newPeople++;
    begIdx = 3;
  }
  if (arr[arr.length - 3] === 0 && 
      arr[arr.length - 2] === 0 && 
      arr[arr.length - 1] === 0) {
    newPeople++;
    end = arr.length - 3;
  }

  //4-6 seats
  if (arr.length < 7) {
    return newPeople;
  }
  
  //> 6 seats 
  let openSeatsTogether = 0;
  for (let i = begIdx; i < end; i++) {
    if (arr[i] === 0) {
      openSeatsTogether++;
      if (openSeatsTogether === 5 || 
          openSeatsTogether < 5 && openSeatsTogether === end - begIdx) {
        if (openSeatsTogether === 4) {
          newPeople += 2;
				}
        else {
          newPeople++;
        }
				openSeatsTogether = 0;
      }
    }
    else {
      openSeatsTogether = 0;
    }
  }
  return newPeople;
}

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

document.getElementById('ans').textContent = maximumSeating(arr);