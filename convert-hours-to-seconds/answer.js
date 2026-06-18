howManySeconds = hrs => {
  return hrs * 3600;
}

const hrs = 2;

document.getElementById('ans').textContent = howManySeconds(hrs);