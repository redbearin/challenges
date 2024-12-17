isPandigital = num => {
  return [...new Set(num.toString().split('').sort())].join('') ===
         '0123456789' ?
    true :
    false;
}

const num = 98140723568910;

document.getElementById('ans').textContent = isPandigital(num);