count = n => {
  if (n >= 10 || n <= -10) 
    return count(n / 10) + 1;
  return 1;
}

const n  = -314890;

document.getElementById('ans').textContent = count(n);