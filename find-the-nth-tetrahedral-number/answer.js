tetra = num => {
  return (num * (num + 1) * (num + 2)) / 6;
}

const num = 5;

document.getElementById('ans').textContent = tetra(num);