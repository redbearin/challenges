const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];
danceConvert = pin => {
  if(/([^0-9])/g.test(pin) || 
		 pin.length !== 4){
    return "Invalid input.";
  }
  const arr = [];
  let idx;
	for (let i = 0; i < pin.length; i++) {
    idx = +pin[i] + i;
    if (idx > MOVES.length - 1) {
      idx = idx - MOVES.length;
    }
    arr.push(MOVES[idx])
  }
  return JSON.stringify(arr);
}

const pin = "9999";

document.getElementById('ans').textContent = danceConvert(pin);
