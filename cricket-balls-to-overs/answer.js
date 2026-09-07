totalOvers = deliveries => {
  let rem = deliveries % 6;
  if (!rem) 
    return deliveries/6;
  return Math.floor(deliveries/6) + '.' + deliveries % 6
}

const deliveries = 945;

document.getElementById('ans').textContent = totalOvers(deliveries);