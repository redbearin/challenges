const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

danceConvert = pin => {
  const arr = [];
	for (let i = 0; i < pin.length; i++) {
    arr.push(MOVES[+pin[i] + i])
  }
  return JSON.stringify(arr);
}

const pin = "3856";

document.getElementById('ans').textContent = danceConvert(pin);

