const mostExpensive = jewelry => {
  let sortedJewel = Object.entries(jewelry).sort((a, b) => b[1] - a[1]);
  return "The most expensive one is the " + sortedJewel[0][0];
};

const jewelry = {
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
};

document.getElementById('ans').textContent = mostExpensive(jewelry);