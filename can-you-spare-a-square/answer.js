tpChecker = details => {
  const days = details.tp * 500/(57 * details.people);
  if (days < 14) {
    return "Your TP will only last " + days + "days, buy more!"
  }
  return "Your TP will last " + days + "days, no need to panic!"
}

const details = { people: 4, tp: 1 };

document.getElementById('ans').textContent = tpChecker(details);