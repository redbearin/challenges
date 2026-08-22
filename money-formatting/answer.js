dollaDollaBills = num => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

const num = -314159.2653;

document.getElementById('ans').textContent = dollaDollaBills(num);