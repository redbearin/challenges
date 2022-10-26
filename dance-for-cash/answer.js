const danceConvert = pin => {
  const moves = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

  // convert the pin to an array of digits
	const pinArr = pin.split('');
  let total;
  // converted pin
  let movePin = [];
  // go digit by digit thru pin
  for (let i = 0; i < +pinArr.length; i++) {
    // some that is not a digit
    if (isNaN(pinArr[i]))
      return "Invalid Input";
    // calculate the total
    total = +pinArr[i] + +i;
    // total more than indices in moves
    if (+total >= 10)
      // cycle back to beginning of array
      total = total % 10;
    // add total to array that includes dance moves
    movePin.push(moves[total]);
  }
  return JSON.stringify(movePin);
};

const pin = "32a1";

document.getElementById('ans').textContent = danceConvert(pin);