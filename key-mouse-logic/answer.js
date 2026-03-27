const KM = details => {
  details.Mouse = (+details.Total.slice(0,-1) - +details.Difference.slice(0,-1))/2 + "$";
  return JSON.stringify(details);
}

const details = {"Total": "1.30$", "Difference": "0.80$", "Mouse": "?"};

document.getElementById('ans').textContent = KM(details);