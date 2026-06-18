isPandigital = num => {
  return new Set((num + '')).size === 10;
}

const num = 98140723568910;

document.getElementById('ans').textContent = isPandigital(num);