shortestDistance = coord => {
  const coordArr = coord.split(',');
  const shortest = Math.sqrt(Math.pow(+coordArr[0] - +coordArr[2], 2) + Math.pow(+coordArr[1] - +coordArr[3], 2));
  if (Number.isInteger(shortest))
    return shortest;
  else
    return shortest.toFixed(2);
}

const coord = "-5,2,3,1";

document.getElementById('ans').textContent = shortestDistance(coord);