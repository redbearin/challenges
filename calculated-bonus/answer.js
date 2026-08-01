calculateBonus = days => {
  if (days < 33) {
    return 0;
  }
  if (days < 41) {
    return (days - 32) * 325;
  }
  if (days < 49) {
    return (325 * 8) + (550 * (days - 40));
  }
  return (325 * 8) + (550 * 8) + (600 * (days - 48));
}

const days = 37;

document.getElementById('ans').textContent = calculateBonus(days);