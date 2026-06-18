fiftyThirtyTwenty = ttl => {
  return JSON.stringify({ "Needs": ttl *.5, "Wants": ttl *.3, "Savings": ttl * .2 });
}

const ttl = 10000;

document.getElementById('ans').textContent = fiftyThirtyTwenty(ttl);