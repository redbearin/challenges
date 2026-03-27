myRegExp = entry => {
  return /^\d{4}$|^\d{6}$/.test(entry);
}

const entry = "45135"; 

document.getElementById('ans').textContent = myRegExp(entry);