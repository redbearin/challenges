littleBig = num => {
  return num % 2 ? 
    5 + Math.floor(num/2) :
    Math.pow(2, num/2 - 1) * 100;
}

const num = 28;

document.getElementById('ans').textContent = littleBig(num); 

